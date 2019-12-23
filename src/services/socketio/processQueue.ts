import {Socket} from 'socket.io'
import uuid from 'uuid'

import {redis} from '../redis'
import {ios} from '../socketio'
import {TLobby, LobbyState} from '../../types'
import {
  MAX_PLAYERS_PER_RACE,
  MIN_PLAYER_PER_RACE,
  QUEUE_WAIT_DURATION,
} from './'
import {lobbies} from '../socketio'
import {startCountdown} from './startCountdown'

export async function processQueue(socketId: Socket['id']) {
  const queueLength = await redis.llen('queue')
  console.log(`${queueLength} players in queue`)

  const {id, name} = await redis.hgetall(socketId)

  let foundLobby: TLobby = null
  const lobbyKeys = lobbies.keys()
  if (lobbyKeys) {
    lobbyKeys.forEach(key => {
      const lobby: TLobby = lobbies.get(key)
      // Find a lobby that isn't full and is waiting for players
      if (
        lobby.players.length < MAX_PLAYERS_PER_RACE &&
        lobby.state === LobbyState.WAITING
      ) {
        foundLobby = lobby
      }
    })
  }

  if (foundLobby) {
    console.log(`found a lobby, ${foundLobby.id}`)
    let playerList = [...foundLobby.players, {id, wpm: 0, name}]

    const newLobby: TLobby = {...foundLobby, players: playerList}
    lobbies.set(foundLobby.id, newLobby)

    await redis.hset(socketId, 'lobbyId', foundLobby.id)

    ios.sockets.sockets[socketId].join(`lobby_${foundLobby.id}`)
    ios.to(`lobby_${foundLobby.id}`).emit('update', lobbies.get(foundLobby.id))

    if (playerList.length === MAX_PLAYERS_PER_RACE) {
      startCountdown(foundLobby.id)
      return
    }

    if (playerList.length >= MIN_PLAYER_PER_RACE) {
      setTimeout(() => {
        startCountdown(foundLobby.id)
      }, QUEUE_WAIT_DURATION)
    }
  } else {
    const lobbyUUID = uuid()
    console.log(`didn't find a lobby. creating. ${lobbyUUID}`)

    const playerList = [{id, wpm: 0, name}]

    await redis.hset(socketId, 'lobbyId', lobbyUUID)
    ios.sockets.sockets[socketId].join(`lobby_${lobbyUUID}`)

    const newLobby: TLobby = {
      countdown: null,
      secondsRemaining: 60,
      acceptUpdates: false,
      name: `lobby_${lobbyUUID}`,
      state: LobbyState.WAITING,
      players: playerList,
      id: lobbyUUID,
    }
    lobbies.set(lobbyUUID, newLobby)

    ios.to(`lobby_${lobbyUUID}`).emit('update', lobbies.get(lobbyUUID))
  }
  await redis.lrem('queue', 0, socketId)
}
