import {buildSchema} from 'type-graphql'
import {GraphQLSchema} from 'graphql'
import {ApolloServer} from 'apollo-server-express'

import {prisma} from '../generated/prisma-client'
import {AuthorizationCheck} from '../middleware/Auth'
import {TrialResolver} from '../resolvers/trial/trial.resolver'
import {AccountResolver} from '../resolvers/account/account.resolver'
import {TestResolver} from '../resolvers/typingTest/test.resolver'
import {RaceResolver} from '../resolvers/race/race.resolver'
import {app} from './express'
import {redis} from './redis'
import {executor} from '../utils/executor'

export async function initGraphQL() {
  const schema = (await buildSchema({
    resolvers: [TrialResolver, AccountResolver, TestResolver, RaceResolver],
    authChecker: AuthorizationCheck,
    dateScalarMode: 'isoDate',
  }).catch(e => {
    console.log(e)
  })) as GraphQLSchema

  const server = new ApolloServer({
    executor: executor(schema),
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
