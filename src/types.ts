import {Prisma} from './generated/prisma-client'
import {Redis} from 'ioredis'

export interface Context {
  prisma: Prisma
  req: any
  redis: Redis
}

export enum LobbyState {
  'WAITING' = 'WAITING',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'FINISHED' = 'FINISHED',
  'STARTING' = 'STARTING',
}

export type TLobby = {
  default?: boolean
  countdown: number
  secondsRemaining: number
  acceptUpdates: boolean
  name: string
  state: LobbyState
  players: any[]
  id: string
}

export interface ILobby {
  [key: string]: TLobby
}
