import {Context} from '../../types'

export const TestQueries = {
  leaderboard: async (_: any, __: any, ctx: Context) => {
    return await ctx.prisma.tests({
      orderBy: 'wpm_DESC',
      first: 25,
    })
  },
}
