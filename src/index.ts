import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()

import {initExpress} from './services/express'
import {initSocketIO} from './services/socketio'
import {initGraphQL} from './services/graphql'

async function bootstrap() {
  await initExpress()
  await initSocketIO()
  await initGraphQL()
}

bootstrap()
