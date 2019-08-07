import {Context} from '../../types'

export const TrialQueries = {
  trials: async (_: any, __: any, ctx: Context) => {
    return await ctx.prisma.trials()
  },
  trial: async (_: any, {trialId}: any, ctx: Context) => {
    return await ctx.prisma.trial({id: trialId})
  },
  trialLeaders: async (_: any, {trialId}: any, ctx: Context) => {
    return await ctx.prisma.trial({id: trialId}).results({
      orderBy: 'wpm_DESC',
      first: 10,
    })
  },
}
