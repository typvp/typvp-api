import {buildSchema} from 'type-graphql'
import {ApolloServer} from 'apollo-server-express'
import path from 'path'

import {AuthorizationCheck} from '../middleware/Auth'
import {AccountResolver} from '../resolvers/account/AccountResolver'
import {AccountRelationsResolver} from '../generated/type-graphql/resolvers/relations/Account/AccountRelationsResolver'
import {TestRelationsResolver} from '../generated/type-graphql/resolvers/relations/Test/TestRelationsResolver'
import {TrialRelationsResolver} from '../generated/type-graphql/resolvers/relations/Trial/TrialRelationsResolver'
import {AccountCrudResolver} from '../generated/type-graphql/resolvers/crud/Account/AccountCrudResolver'
import {TestCrudResolver} from '../generated/type-graphql/resolvers/crud/Test/TestCrudResolver'
import {TrialCrudResolver} from '../generated/type-graphql/resolvers/crud/Trial/TrialCrudResolver'
import {app} from './express'
import {redis} from './redis'
import {executor} from '../utils/executor'
import {prisma} from '../services/prisma'

export async function initGraphQL() {
  const schema = await buildSchema({
    resolvers: [
      AccountResolver,
      AccountRelationsResolver,
      AccountCrudResolver,
      TestRelationsResolver,
      TestCrudResolver,
      TrialCrudResolver,
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
