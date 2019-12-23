import io, {Socket} from 'socket.io'
import lru from 'tiny-lru'
import uuid from 'uuid'

import {socketServer} from './express'
import {redis} from './redis'
import {LobbyState, TLobby} from '../types'
import {processQueue} from './socketio/processQueue'

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
