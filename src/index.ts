import 'reflect-metadata'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import {GraphQLSchema} from 'graphql'
import Redis from 'ioredis'
import io, {Socket} from 'socket.io'
import http from 'http'
import uuid from 'uuid'

import {prisma} from './generated/prisma-client'
import {AuthorizationCheck} from './middleware/Auth'
import {TrialResolver} from './resolvers/trial/trial.resolver'
import {AccountResolver} from './resolvers/account/account.resolver'
import {TestResolver} from './resolvers/typingTest/test.resolver'
import {generate} from '@typvp/gen'

export const redis = new Redis(process.env.REDIS_PORT, {
  password: process.env.REDIS_PASSWORD,
})

const app = express()

const socketServer = http.createServer(app)
socketServer.listen(8086)
const ios = io(socketServer, {
  handlePreflightRequest: (req, res) => {
    const headers = {
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Origin': req.headers.origin, //or the specific origin you want to give access to,
      'Access-Control-Allow-Credentials': true,
    }
    res.writeHead(200, headers)
    res.end()
  },
})

async function initExpress() {
  app.disable('x-powered-by')
  app.get('/confirm/:id', async (req, res) => {
    const {id} = req.params
    const userId = await redis.get(id)
    if (userId) {
      const account = await prisma.updateAccount({
        where: {
          id: userId,
        },
        data: {confirmed: true},
      })
      res.send(
        `
          <script>
            setTimeout(function () {
              window.location.replace("https://typvp.xyz");
            }, 5000)
          </script>
          Email for account ${account.username} has been verified! Redirecting you to typvp in 5 seconds...
        `,
      )
    } else {
      res.send('It looks like your email validation link expired...')
    }
  })
}

type TRoom = {
  countdown: number
  secondsRemaining: number
  acceptUpdates: boolean
  name: string
  state: string
  players: any[]
}

interface IRoom {
  [key: string]: TRoom
}

let rooms: IRoom

const PLAYERS_PER_RACE = 2
const RACE_DURATION = 61000
const COUNTDOWN_DURATION_SECONDS = 10

async function processQueue() {
  const queueLength = await redis.llen('queue')
  console.log(`${queueLength} players in queue`)
  if (queueLength >= PLAYERS_PER_RACE) {
    const players = await redis.lrange('queue', 0, PLAYERS_PER_RACE - 1)
    console.log(`lobby created with ids: ${players}`)
    const roomUUID = uuid()
    let playerList = [] as any
    for (const player of players) {
      const playerId = await redis.hget(player, 'id')
      playerList = [...playerList, {id: playerId, wpm: 0}]
      await redis.hset(player, 'roomId', roomUUID)
      ios.sockets.sockets[player].join(`room_${roomUUID}`)
    }
    rooms = {
      ...rooms,
      [roomUUID]: {
        countdown: null,
        secondsRemaining: 60,
        acceptUpdates: false,
        name: `room_${roomUUID}`,
        state: 'waiting',
        players: playerList,
      },
    }
    await redis.ltrim('queue', PLAYERS_PER_RACE, -1)
    startCountdown(roomUUID)
  }
}

async function startRace(roomUUID: string) {
  rooms[roomUUID].countdown = 0
  rooms[roomUUID].state = 'in-progress'
  rooms[roomUUID].acceptUpdates = true
  const duration = setInterval(() => {
    rooms[roomUUID].secondsRemaining -= 1
    ios.to(`room_${roomUUID}`).emit('race_request-progress', rooms[roomUUID])
  }, 1000)
  setTimeout(() => {
    rooms[roomUUID].state = 'finished'
    rooms[roomUUID].acceptUpdates = false
    ios.to(`room_${roomUUID}`).emit('update', rooms[roomUUID])
    ios.to(`room_${roomUUID}`).clients((_: any, clients: [string]) => {
      clients.forEach(async socketId => {
        await redis.hdel(socketId, 'roomId')
        ios.sockets.sockets[socketId].leave(`room_${roomUUID}`)
      })
    })
    delete rooms[roomUUID]
    clearInterval(duration)
  }, RACE_DURATION)
}

async function startCountdown(roomUUID: string) {
  ios.to(`room_${roomUUID}`).emit(
    'race_send-wordList',
    generate(250, {
      minLength: 3,
      maxLength: 8,
      join: '|',
    }) as string,
  )

  rooms[roomUUID].state = 'starting'
  let countdown = COUNTDOWN_DURATION_SECONDS

  const countdownInterval = setInterval(() => {
    rooms[roomUUID].countdown = countdown
    countdown--

    ios.to(`room_${roomUUID}`).emit('update', rooms[roomUUID])
    if (countdown === 0) {
      clearInterval(countdownInterval)
      startRace(roomUUID)
    }
  }, 1000)
}

async function initGraphQL() {
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

async function initSocketIO() {
  ios.on('connection', async (socket: Socket) => {
    let playerID: string
    let sendUpdate: boolean = false
    console.log('connection')

    socket.on('race_queue', async data => {
      playerID = data.id
      await redis.hset(socket.id, 'id', data.id)
      await redis.rpush('queue', socket.id)
      processQueue()
    })

    socket.on('race_progress', async data => {
      const info = await redis.hgetall(socket.id)
      const playerIndex = rooms[info.roomId].players.findIndex(
        player => player.id === info.id,
      )
      rooms[info.roomId].players[playerIndex].wpm = data.wpm
      // if (sendUpdate) {
      //   ios.to(`room_${info.roomId}`).emit('update', rooms[info.roomId])
      //   sendUpdate = false
      // }
      // setTimeout(() => {
      //   sendUpdate = true
      // }, 1000)
    })

    socket.on('disconnect', async () => {
      console.log('disconnected')
      // const newPlayers = rooms.room1.players.filter(
      //   player => player.playerID !== playerID,
      // )
      // delete rooms.room1.players[playerID]
      // rooms.room1.players = [...newPlayers]
      // ios.to('room1').emit('update', rooms.room1)
      await redis.del(socket.id)
      await redis.lrem('queue', 0, socket.id)
      socket.leaveAll()
      socket.removeAllListeners()
    })
  })
}

async function bootstrap() {
  await initExpress()
  await initSocketIO()
  await initGraphQL()
}

bootstrap()
