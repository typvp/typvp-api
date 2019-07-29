import {Context} from '../../types'
import {getAccountId} from '../../utils'
import {RoomFragment} from '../fragments/RoomFragment'

const MAX_LENGTH = 5 // max number of players in a race

/**
 * User may create a room if they wish, becoming a roomHost.
 * This will add another open room to the available room list.
 *
 * returns: type Room
 */
export const RoomMutations = {
  createRoom: async (_: any, __: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    return await ctx.prisma
      .createRoom({
        roomState: 'AWAITING',
        roomHost: accountId, // not a real error, not sure why it is complaining
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
      })
      .$fragment(RoomFragment)
  },
  /**
   * Users can join a "quick match" which will
   * add them to the most currently active room
   * (most players)
   *
   * returns: type Room
   */
  quickMatch: async (_: any, __: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    const availableRooms: any = await ctx.prisma
      .rooms({
        where: {
          roomState_not_in: ['BUSY', 'FULL'],
          AND: {
            race: {
              raceState_not_in: ['COUNTDOWN', 'FINISHED', 'IN_PROGRESS'],
            },
          },
        },
      })
      .$fragment(RoomFragment)

    // Make sure nothing went wrong before incase
    // we try accessing an undefined array
    if (availableRooms !== null) {
      // Sort room by most players to least,
      // this allows us to retrieve the first room
      // in the array which will be the most active
      // room in the array
      availableRooms.sort((a, b) => {
        return b.race.players.length - a.race.players.length
      })

      // Check to see if we have availableRooms
      if (availableRooms.length != 0) {
        // We need to see if the user joining would be the
        // last player to join before hitting the room limit.
        // Just update the room with the new user if 1= max - 1
        if (availableRooms[0].race.players.length != MAX_LENGTH - 1) {
          return await ctx.prisma
            .updateRoom({
              where: {
                id: availableRooms[0].id,
              },
              data: {
                race: {
                  update: {
                    players: {
                      connect: [
                        {
                          id: accountId,
                        },
                      ],
                    },
                  },
                },
              },
            })
            .$fragment(RoomFragment)
        } else {
          // If the user is the last player to join
          // we need to let other users know the room is full
          return await ctx.prisma
            .updateRoom({
              where: {
                id: availableRooms[0].id,
              },
              data: {
                roomState: 'FULL',
                race: {
                  update: {
                    players: {
                      connect: [
                        {
                          id: accountId,
                        },
                      ],
                    },
                  },
                },
              },
            })
            .$fragment(RoomFragment)
        }
      }
    }
  },
  /**
   * Users can decide to join a room from a
   * list of available rooms.
   *
   * NOTE: This may be used as well as private invites
   * once implemented.
   *
   * returns: type Room
   */
  joinRoom: async (_: any, {roomId}: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    // We need to get the race from the room
    // the user is trying to join
    const race: any = await ctx.prisma
      .room({id: roomId})
      .race()
      .$fragment(`fragment RacePlayers on Race { players }`)

    // We need to check whether the user is the last
    // player to join before hitting the room player limit
    // Just update room with user if != max - 1
    if (race.players.length != MAX_LENGTH - 1) {
      return await ctx.prisma
        .updateRoom({
          where: {
            id: roomId,
          },
          data: {
            race: {
              update: {
                players: {
                  connect: [
                    {
                      id: accountId,
                    },
                  ],
                },
              },
            },
          },
        })
        .$fragment(RoomFragment)
    } else {
      // If the user is the last player to join
      // we need to let other users know the room is full
      return await ctx.prisma
        .updateRoom({
          where: {
            id: roomId,
          },
          data: {
            roomState: 'FULL',
            race: {
              update: {
                raceState: 'IN_PROGRESS',
                players: {
                  connect: [
                    {
                      id: accountId,
                    },
                  ],
                },
              },
            },
          },
        })
        .$fragment(RoomFragment)
    }
  },
}
