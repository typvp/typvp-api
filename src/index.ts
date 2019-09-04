import {resolve} from 'path'
import * as dotenv from 'dotenv'
dotenv.config()
import {ApolloServer, gql} from 'apollo-server'
import {makeExecutableSchema} from 'graphql-tools'
import {applyMiddleware} from 'graphql-middleware'
import {rule, shield, allow} from 'graphql-shield'
import {importSchema} from 'graphql-import'

import resolvers from './resolvers'
import {prisma} from './generated/prisma-client'
import {getAccountId} from './utils'
import {Context} from './types'

const isAuthenticated = rule()(
  async (parent: any, args: any, ctx: Context, info: any) =>
    getAccountId(ctx) !== null,
)

const permissions = shield({
  Query: {
    account: allow,
    leaderboard: allow,
    trials: allow,
    trial: allow,
    trialLeaders: allow,
  },
  Mutation: {
    addResults: isAuthenticated,
    addResultsToTrial: isAuthenticated,
  },
})

const typeDefs = gql(importSchema(resolve('./src/schema.graphql')))

const schema = applyMiddleware(
  makeExecutableSchema({typeDefs, resolvers}),
  permissions,
)

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
    origin: ['https://typvp.xyz', 'http://localhost:8080'],
  },
  context: (request: any) => ({
    ...request,
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
