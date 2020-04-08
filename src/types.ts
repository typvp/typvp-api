import {prisma} from './services/prisma'
import {Redis} from 'ioredis'

export interface Context {
  // prisma: typeof prisma
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
  players: RacePlayer[]
  id: string
}

export type RacePlayer = {
  wpm: number
  color?: string
  id: string
  name: string
}

export interface ILobby {
  [key: string]: TLobby
}
