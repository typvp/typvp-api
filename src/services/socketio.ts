import io, {Socket} from 'socket.io'
import lru from 'tiny-lru'
import uuid from 'uuid'

import {socketServer} from './express'
import {redis} from './redis'
import {LobbyState, TLobby} from '../types'
import {processQueue} from './socketio/processQueue'
import {startCountdown} from './socketio/startCountdown'
import {
  MAX_PLAYERS_PER_RACE,
  MIN_PLAYER_PER_RACE,
  QUEUE_WAIT_DURATION,
} from './socketio/'

export const lobbies = lru(100)

export const ios = io(socketServer)

function seedLobbies(count = 6) {
  for (let i = 0; i < count; i++) {
    const lobbyUUID = uuid()
    lobbies.set(lobbyUUID, {
      default: true,
      countdown: null,
      secondsRemaining: 60,
      acceptUpdates: false,
      name: `lobby_${lobbyUUID}`,
      state: LobbyState.WAITING,
      players: [],
      id: lobbyUUID,
    } as TLobby)
  }
}

export async function initSocketIO() {
  seedLobbies()
  ios.on('connection', async (socket: Socket) => {
    console.log('connection')

    socket.on('race_queue', async data => {
      redis.hmset(socket.id, ['id', data.id, 'name', data.name])
      await redis.rpush('queue', socket.id)

      processQueue(socket.id)
    })

    socket.on('race_join-lobby', async data => {
      const {lobbyId, id, name} = data
      console.log(`joining specific lobby ${lobbyId}`)

      redis.hmset(socket.id, ['id', data.id, 'name', data.name])

      const lobbyToJoin: TLobby = lobbies.get(lobbyId)
      if (lobbyToJoin) {
        if (
          lobbyToJoin.players.length < MAX_PLAYERS_PER_RACE &&
          lobbyToJoin.state === LobbyState.WAITING
        ) {
          console.log('lobby to join is valid')
          const playerList = [...lobbyToJoin.players, {id, wpm: 0, name}]

          const newLobby = {...lobbyToJoin, players: playerList}

          console.log(newLobby)
          lobbies.set(lobbyToJoin.id, newLobby)

          await redis.hset(socket.id, 'lobbyId', lobbyToJoin.id)

          ios.sockets.sockets[socket.id].join(`lobby_${lobbyToJoin.id}`)
          ios
            .to(`lobby_${lobbyToJoin.id}`)
            .emit('update', lobbies.get(lobbyToJoin.id))

          if (playerList.length === MAX_PLAYERS_PER_RACE) {
            startCountdown(lobbyToJoin.id)
            return
          }

          if (playerList.length >= MIN_PLAYER_PER_RACE) {
            setTimeout(() => {
              startCountdown(lobbyToJoin.id)
            }, QUEUE_WAIT_DURATION)
          }
        }
      }
    })

    socket.on('race_progress', async data => {
      const info = await redis.hgetall(socket.id)

      const lobby: TLobby = lobbies.get(info.lobbyId)

      const playerIndex = lobby.players.findIndex(
        player => player.id === info.id,
      )

      lobby.players[playerIndex].wpm = data.wpm
      const lobbyProgressUpdate = {
        ...lobby,
      }
      lobbies.set(info.lobbyId, lobbyProgressUpdate)
    })

    socket.on('disconnect', async () => {
      console.log('disconnected')

      const info = await redis.hgetall(socket.id)
      if (info.lobbyId) {
        const lobby: TLobby = lobbies.get(info.lobbyId)
        console.log(lobby)
        const newPlayers = lobby.players.filter(player => {
          console.log(player.id, info.id)
          return player.id !== info.id
        })
        console.log(newPlayers)

        const updatedLobby: TLobby = {
          ...lobby,
          players: newPlayers,
        }

        lobbies.set(info.lobbyId, updatedLobby)
      }

      await redis.del(socket.id)
      await redis.lrem('queue', 0, socket.id)
      socket.leaveAll()
      socket.removeAllListeners()
    })
  })
}
