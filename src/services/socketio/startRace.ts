import {redis} from '../redis'
import {ios} from '../socketio'
import {lobbies} from '../socketio'
import {LobbyState, TLobby} from '../../types'

export async function startRace(lobbyUUID: string) {
  const lobbyAtRaceStart: TLobby = lobbies.get(lobbyUUID) as TLobby
  const updatedLobbyAtRaceStart: TLobby = {
    ...lobbyAtRaceStart,
    countdown: 0,
    state: LobbyState.IN_PROGRESS,
    acceptUpdates: true,
  }

  lobbies.set(lobbyUUID, updatedLobbyAtRaceStart)

  const duration = setInterval(() => {
    const lobbyAtRaceTick: TLobby = lobbies.get(lobbyUUID) as TLobby

    // Exit out early if the lobby is empty
    if (lobbyAtRaceTick.players.length === 0) {
      clearInterval(duration)

      if (lobbyAtRaceTick.default) {
        const resetDefaultLobby: TLobby = {
          ...lobbyAtRaceTick,
          countdown: null as any,
          secondsRemaining: 60,
          acceptUpdates: false,
          state: LobbyState.WAITING,
          players: [] as any,
        }
        lobbies.set(lobbyUUID, resetDefaultLobby)
      } else {
        lobbies.delete(lobbyUUID)
      }
      return
      // Clean up if the Race is completed
    } else if (lobbyAtRaceTick.secondsRemaining === 0) {
      clearInterval(duration)
      const updatedLobbyTick: TLobby = {
        ...lobbyAtRaceTick,
        state: LobbyState.FINISHED,
        acceptUpdates: false,
      }

      lobbies.set(lobbyUUID, updatedLobbyTick)

      ios.to(`lobby_${lobbyUUID}`).emit('update', lobbies.get(lobbyUUID))
      ios
        .to(`lobby_${lobbyUUID}`)
        .clients(async (_: any, clients: [string]) => {
          for (const socketId of clients) {
            await redis.hdel(socketId, 'lobbyId')
            ios.sockets.sockets[socketId].leave(`lobby_${lobbyUUID}`)
          }
        })

      if (lobbyAtRaceTick.default) {
        const resetDefaultLobby: TLobby = {
          ...lobbyAtRaceTick,
          countdown: null as any,
          secondsRemaining: 60,
          acceptUpdates: false,
          state: LobbyState.WAITING,
          players: [] as any,
        }
        lobbies.set(lobbyUUID, resetDefaultLobby)
      } else {
        lobbies.delete(lobbyUUID)
      }
      // Otherwise, process the lobby tick
    } else {
      const lobbyTickedDown: TLobby = {
        ...lobbyAtRaceTick,
        secondsRemaining: lobbyAtRaceTick.secondsRemaining -= 1,
      }
      lobbies.set(lobbyUUID, lobbyTickedDown)
      ios
        .to(`lobby_${lobbyUUID}`)
        .emit('race_request-progress', lobbies.get(lobbyUUID))
    }
  }, 1000)
}
