import {Context} from '../../types'
import {RoomFragment} from '../fragments/RoomFragment'

export const RoomSubscriptions = {
  rooms: {
    subscribe: async (_: any, __: any, ctx: Context) => {
      return ctx.prisma.$subscribe
        .room({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node()
        .$fragment(RoomFragment)
    },
    resolve: (payload: any) => {
      return payload
    },
  },
}
