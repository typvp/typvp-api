import {generate} from '@typvp/gen'

import {ios, lobbies} from '../socketio'
import {LobbyState, TLobby} from '../../types'
import {COUNTDOWN_DURATION_SECONDS} from './'
import {startRace} from './startRace'

export async function startCountdown(lobbyUUID: string) {
  ios.to(`lobby_${lobbyUUID}`).emit(
    'race_send-wordList',
    generate(250, {
      minLength: 3,
      maxLength: 8,
      join: '|',
    }) as string,
  )

  const lobby: TLobby = lobbies.get(lobbyUUID)
  const updatedLobbyCountdownState: TLobby = {
    ...lobby,
    state: LobbyState.STARTING,
  }

  lobbies.set(lobbyUUID, updatedLobbyCountdownState)

  let countdown = COUNTDOWN_DURATION_SECONDS

  const countdownInterval = setInterval(() => {
    const lobbyAtCountdownTick: TLobby = lobbies.get(lobbyUUID)

    const updatedLobbyAtCountdownTick: TLobby = {
      ...lobbyAtCountdownTick,
      countdown,
    }

    lobbies.set(lobbyUUID, updatedLobbyAtCountdownTick)
    countdown--

    ios.to(`lobby_${lobbyUUID}`).emit('update', lobbies.get(lobbyUUID))
    if (countdown === 0) {
      clearInterval(countdownInterval)
      startRace(lobbyUUID)
    }
  }, 1000)
}
