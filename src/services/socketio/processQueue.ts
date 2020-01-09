import {Socket} from 'socket.io'
import uuid from 'uuid'

import {redis} from '../redis'
import {ios} from '../socketio'
import {TLobby, LobbyState} from '../../types'
import {MAX_PLAYERS_PER_RACE} from './'
import {lobbies} from '../socketio'

export async function processQueue(socketId: Socket['id']) {
  const queueLength = await redis.llen('queue')
  console.log(`${queueLength} players in queue`)

  const {lobbyId} = await redis.hgetall(socketId)

  if (lobbyId) {
    console.log('duplicate connection')
    return
  }

  let foundLobby: TLobby = null
  const lobbyKeys = lobbies.keys()

  if (lobbyKeys) {
    do {
      // This prioritizes Lobby 1 (most likely) when there are many empty rooms
      let keyIndex = 0
      const lobbyToCheck: TLobby = lobbies.get(lobbyKeys[keyIndex])

      if (
        lobbyToCheck.players.length < MAX_PLAYERS_PER_RACE &&
        lobbyToCheck.state === LobbyState.WAITING
      ) {
        foundLobby = lobbyToCheck
      } else {
        if (keyIndex < lobbyKeys.length - 1) keyIndex++
      }
    } while (!foundLobby)
  }

  if (foundLobby) {
    console.log(`found a lobby, ${foundLobby.id}`)
    ios.sockets.sockets[socketId].emit('queue_result', {
      id: foundLobby.id,
    })
  } else {
    const lobbyUUID = uuid()
    console.log(`didn't find a lobby. creating. ${lobbyUUID}`)

    const newLobby: TLobby = {
      countdown: null,
      secondsRemaining: 60,
      acceptUpdates: false,
      name: `lobby_${lobbyUUID}`,
      state: LobbyState.WAITING,
      players: [],
      id: lobbyUUID,
    }
    lobbies.set(lobbyUUID, newLobby)

    ios.sockets.sockets[socketId].emit('queue_result', {
      id: lobbyUUID,
    })
  }
  await redis.lrem('queue', 0, socketId)
}
