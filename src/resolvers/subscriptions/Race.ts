import {Context} from '../../types'
import {RoomFragment} from '../fragments/RoomFragment'

export const RaceSubscriptions = {
  races: {
    subscribe: async (_: any, __: any, ctx: Context) => {
      return await ctx.prisma.$subscribe
        .race({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node()
    },
    resolve: (payload: any) => {
      return payload
    },
  },
}
