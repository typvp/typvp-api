import {GraphQLServer} from 'graphql-yoga'
import * as dotenv from 'dotenv'
import {rule, shield, allow} from 'graphql-shield'

import resolvers from './resolvers'
import {prisma} from './generated/prisma-client'
import {getAccountId} from './utils'

dotenv.config()

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return getAccountId(ctx) !== null
})

const permissions = shield({
  Query: {
    account: allow,
  },
  Mutation: {
    addResults: isAuthenticated,
  },
})

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: request => ({
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

server.start(options, ({port}) => {
  console.log(`typvp-api has started — ${port}`)
})
