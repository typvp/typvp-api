import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import {GraphQLSchema} from 'graphql'
import Redis from 'ioredis'

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

  const server = new ApolloServer({
    subscriptions: {
      path: '/sub',
    },
    playground: {
      subscriptionEndpoint: '/sub',
    },
    schema,
    // cors: {
    //   credentials: true,
    //   origin: [
    //     'https://typvp.xyz',
    //     'https://next.typvp.xyz',
    //     'http://localhost:8082',
    //   ],
    // },
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
  // server.listen({port: process.env.PORT}).then(({url}: any) => {
  //   console.log(`typvp-api has started - ${url}`)
  // })
  app.listen({port: process.env.PORT}, () =>
    console.log(
      `typvp-api has started at http://localhost:${process.env.PORT}/graphql`,
    ),
  )
}

bootstrap()
