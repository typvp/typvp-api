import {GraphQLServer} from 'graphql-yoga'
import * as dotenv from 'dotenv'

import resolvers from './resolvers'
import {prisma} from './generated/prisma-client'

dotenv.config()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers,
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
