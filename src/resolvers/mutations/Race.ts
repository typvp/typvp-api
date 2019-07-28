import {Context} from '../../types'
import {getAccountId} from '../../utils'
import {Race, Test} from '../../generated/prisma-client'

function compare(a, b) {
  const lenA = a.race.players.length
  const lenB = b.race.players.length

  let comparison = 0
  if (lenA > lenB) {
    comparison = 1
  } else if (lenA < lenB) {
    comparison = -1
  }
  return comparison * -1
}

const MAX_PLAYERS = 5
// This may not be needed anymore
export const RaceMutations = {
  joinRace: async (_: any, __: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    const aR: any = await ctx.prisma.rooms({
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
          players {
            id
          }
        }
      }
    `)

    aR.sort(compare)

    for (const room of aR) {
      console.log(room)
      if (room.race.players.length < MAX_PLAYERS) {
        const s = await ctx.prisma.updateRace({
          where: {
            id: accountId,
          },
          data: {
            players: {
              set: {
                id: accountId,
              },
            },
          },
        })

        console.log(s)
      }
    }
  },
  startRace: async (_: any, __: any, ctx: Context) => {
    const accountId = getAccountId(ctx)

    const race = ctx.prisma
      .room({roomHost: accountId})
      .race()
      .$fragment(`fragment RaceID on Race { id }`)

    // TODO: Update room and race to IN PROGESS
  },
}
