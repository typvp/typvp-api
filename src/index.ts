import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()
import {ApolloServer} from 'apollo-server'
import {buildSchema} from 'type-graphql'
import {GraphQLSchema} from 'graphql'

import {prisma} from './generated/prisma-client'
import {AuthorizationCheck} from './middleware/Auth'
import {TrialResolver} from './resolvers/trial/trial.resolver'
import {AccountResolver} from './resolvers/account/account.resolver'
import {TestResolver} from './resolvers/typingTest/test.resolver'

async function bootstrap() {
  const schema = (await buildSchema({
    resolvers: [TrialResolver, AccountResolver, TestResolver],
    authChecker: AuthorizationCheck,
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
      origin: ['https://typvp.xyz', 'http://localhost:8082'],
    },
    context: ({req, res}) => ({
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
