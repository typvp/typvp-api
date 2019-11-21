import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()
import {ApolloServer} from 'apollo-server'
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
      origin: [
        'https://typvp.xyz',
        'https://next.typvp.xyz',
        'http://localhost:8082',
      ],
    },
    context: ({req, res}) => ({
      redis,
      req,
      res,
      prisma,
    }),
  })

  server.listen({port: process.env.PORT}).then(({url}: any) => {
    console.log(`typvp-api has started - ${url}`)
  })
}

bootstrap()
