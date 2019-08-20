import {Context} from '../../types'
import {TestFragment} from '../fragments/TestFragment'

export const TestQueries = {
  leaderboard: async (_: any, __: any, ctx: Context) => {
    return await ctx.prisma
      .tests({
        orderBy: 'wpm_DESC',
        first: 25,
      })
      .$fragment(TestFragment)
  },
}
