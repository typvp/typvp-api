import {Context} from '../../types'
import {getAccountId} from '../../utils'
import {RoomFragment} from '../fragments/RoomFragment'
import {createGzip} from 'zlib'
import {Race} from '../../generated/prisma-client'

export const RoomMutations = {
  createRoom: async (_: any, __: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    const room = await ctx.prisma
      .createRoom({
        roomState: 'AWAITING',
        race: {
          create: {
            players: {
              connect: {
                id: accountId,
              },
            },
            raceState: 'AWAITING',
            wordSet: '',
          },
        },
        roomHost: accountId,
      })
      .$fragment(RoomFragment)

    console.log(room)

    return room
  },
  quickMatch: async (_: any, __: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    const firstAvailableRoom: any = await ctx.prisma
      .rooms({
        where: {
          roomState_not_in: ['BUSY', 'FULL'],
          AND: {
            race: {
              raceState_not_in: ['COUNTDOWN', 'FINISHED', 'IN_PROGRESS'],
            },
          },
        },
        first: 1,
      })
      .$fragment(RoomFragment)

    // TODO: Check max length of players in room

    // TODO: Sort room by largest and add user to the most filled room

    if (firstAvailableRoom !== null) {
      const room = await ctx.prisma
        .updateRoom({
          where: {
            id: firstAvailableRoom.id,
          },
          roomState: 'AWAITING', // TODO: Not really an error, but need to conform to generated schema types
          roomHost: '',
          race: {
            update: {
              where: {
                id: firstAvailableRoom.race.id,
              },
              players: {
                connect: {
                  id: accountId,
                },
              },
            },
          },
        })
        .$fragment(RoomFragment)

      console.log(room)

      return room
    }

    // TODO: Logic if all rooms are full, or become full at the time of joining
  },

  joinRoom: async (_: any, {roomId}: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    const race = (await ctx.prisma
      .room({id: roomId})
      .race()
      .$fragment(`fragment RaceFragment on Race { id }`)) as Race

    const room = await ctx.prisma
      .updateRoom({
        where: {
          id: roomId,
        },
        roomState: 'AWAITING', // TODO: Not really an error, but need to conform to generated schema types
        race: {
          update: {
            where: {
              id: race.id,
            },
            players: {
              connect: {
                id: accountId,
              },
            },
          },
        },
      })
      .$fragment(RoomFragment)

    return room
  },
}
