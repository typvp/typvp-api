import {Context} from '../../types'
import {getAccountId} from '../../utils'
import {Race} from '../../generated/prisma-client'

export const RaceMutations = {
  joinRace: async (_: any, __: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    // const availableRaces = await ctx.prisma.races({
    //   where: {
    //     room: {
    //       roomState_not_in: ['BUSY', 'FULL'],
    //     },
    //     AND: {
    //       raceState_not_in: ['COUNTDOWN', 'FINISHED', 'IN_PROGRESS'],
    //     },
    //   },
    // })

    const aR = await ctx.prisma.rooms({
      where: {
        roomState_not_in: ['BUSY', 'FULL'],
        AND: {
          race: {
            raceState_not_in: ['COUNTDOWN', 'FINISHED', 'IN_PROGRESS'],
          },
        },
      },
    }).$fragment(`
      fragment RaceFragment on Race {
        id
        roomState
        race {
          id
          raceState
        }
      }
    `)

    // for (let i = 0; i < availableRaces.length; i++) {
    //   if (availableRaces[i].)
    // }
    console.log(aR)
  },
}
