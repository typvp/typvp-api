import {Resolver, UseMiddleware, Query} from 'type-graphql'

import {lobbies} from '../../services/socketio'
import {Lobby} from './race.type'
import {TLobby} from '../../types'

@Resolver()
export class RaceResolver {
  @Query(returns => [Lobby])
  lobbies() {
    const lobbyKeys = lobbies.keys()
    let defaultLobbys: TLobby[] = []

    lobbyKeys.forEach(key => {
      const lobby: TLobby = lobbies.get(key)
      if (lobby.default) {
        defaultLobbys.push(lobby)
      }
    })
    return defaultLobbys
  }
}
