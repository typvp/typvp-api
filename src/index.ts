import * as dotenv from 'dotenv'
dotenv.config()
import {GraphQLServer} from 'graphql-yoga'
import {rule, shield, allow} from 'graphql-shield'

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

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions],
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
  cors: {
    credentials: true,
    origin: ['https://typvp.xyz', 'http://localhost:8080'],
  },
}

server.start(options, ({port}: any) => {
  console.log(`typvp-api has started — ${port}`)
})
