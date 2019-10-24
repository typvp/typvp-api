import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()
import {ApolloServer} from 'apollo-server'
import {buildSchema} from 'type-graphql'

import {prisma} from './generated/prisma-client'
import {AuthorizationCheck} from './middleware/Auth'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + '/resolvers/**/*.resolver.ts'],
    authChecker: AuthorizationCheck,
  }).catch(e => {
    console.log(e)
  })

  const server = new ApolloServer({
    subscriptions: {
      path: '/sub',
    },
    playground: {
      subscriptionEndpoint: '/sub',
    },
    schema,
    cors: {
      credentials: true,
      origin: ['https://typvp.xyz', 'http://localhost:8082'],
    },
    context: ({req, res}) => ({
      req,
      res,
      prisma,
    }),
  })

  const options = {
    port: process.env.PORT,
    endpoint: '/',
    subscriptions: '/sub',
    playground: '/playground',
  }

  server.listen({port: process.env.PORT}).then(({url}) => {
    console.log(`typvp-api has started - ${url}`)
  })
}

bootstrap()
