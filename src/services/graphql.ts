import {buildSchema} from 'type-graphql'
import {ApolloServer} from 'apollo-server-express'
import path from 'path'

import {AuthorizationCheck} from '../middleware/Auth'
import {AccountResolver} from '../resolvers/account/AccountResolver'
import {TrialResolver} from '../resolvers/trial/TrialResolver'
import {AccountRelationsResolver} from '../generated/type-graphql/resolvers/relations/Account/AccountRelationsResolver'
import {FindOneAccountResolver} from '../generated/type-graphql/resolvers/crud/Account/FindOneAccountResolver'
import {TestRelationsResolver} from '../generated/type-graphql/resolvers/relations/Test/TestRelationsResolver'
import {TrialRelationsResolver} from '../generated/type-graphql/resolvers/relations/Trial/TrialRelationsResolver'
import {FindOneTrialResolver} from '../generated/type-graphql/resolvers/crud/Trial/FindOneTrialResolver'
import {FindManyTrialResolver} from '../generated/type-graphql/resolvers/crud/Trial/FindManyTrialResolver'
import {app} from './express'
import {redis} from './redis'
import {executor} from '../utils/executor'
import {prisma} from '../services/prisma'

export async function initGraphQL() {
  const schema = await buildSchema({
    resolvers: [
      TrialResolver,
      FindOneTrialResolver,
      FindManyTrialResolver,
      FindOneAccountResolver,
      AccountResolver,
      AccountRelationsResolver,
      TestRelationsResolver,
      TrialRelationsResolver,
    ],
    authChecker: AuthorizationCheck,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  })

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
