import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import {GraphQLSchema} from 'graphql'
import Redis from 'ioredis'
import io, {Socket} from 'socket.io'
import http from 'http'

import {prisma} from './generated/prisma-client'
import {AuthorizationCheck} from './middleware/Auth'
import {TrialResolver} from './resolvers/trial/trial.resolver'
import {AccountResolver} from './resolvers/account/account.resolver'
import {TestResolver} from './resolvers/typingTest/test.resolver'

export const redis = new Redis(process.env.REDIS_PORT, {
  password: process.env.REDIS_PASSWORD,
})

async function bootstrap() {
  const schema = (await buildSchema({
    resolvers: [TrialResolver, AccountResolver, TestResolver],
    authChecker: AuthorizationCheck,
    dateScalarMode: 'isoDate',
  }).catch(e => {
    console.log(e)
  })) as GraphQLSchema

  const app = express()
  app.disable('x-powered-by')

  app.get('/confirm/:id', async (req, res) => {
    const {id} = req.params
    const userId = await redis.get(id)
    if (userId) {
      const account = await prisma.updateAccount({
        where: {
          id: userId,
        },
        data: {confirmed: true},
      })
      res.send(
        `
          <script>
            setTimeout(function () {
              window.location.replace("https://typvp.xyz");
            }, 5000)
          </script>
          Email for account ${account.username} has been verified! Redirecting you to typvp in 5 seconds...
        `,
      )
    } else {
      res.send('It looks like your email validation link expired...')
    }
  })

  const socketServer = http.createServer(app)
  socketServer.listen(8086)
  const ios = io(socketServer, {
    handlePreflightRequest: (req, res) => {
      const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': req.headers.origin, //or the specific origin you want to give access to,
        'Access-Control-Allow-Credentials': true,
      }
      res.writeHead(200, headers)
      res.end()
    },
  })

  ios.on('connection', (socket: Socket) => {
    console.log('connection')
    socket.on('race-find-lobby', data => {
      console.log(data)
      const id = data.id
      ios.emit('race-join-lobby', {id: '12345'})
    })
  })

  const server = new ApolloServer({
    subscriptions: {
      path: '/sub',
    },
    playground: {
      subscriptionEndpoint: '/sub',
    },
    schema,
    context: ({req, res}) => ({
      redis,
      req,
      res,
      prisma,
    }),
  })

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: [
        'https://typvp.xyz',
        'https://next.typvp.xyz',
        'http://localhost:8082',
      ],
    },
    path: '/graphql',
  })

  app.listen({port: process.env.PORT}, () =>
    console.log(
      `typvp-api has started at http://localhost:${process.env.PORT}/graphql`,
    ),
  )
}

bootstrap()
