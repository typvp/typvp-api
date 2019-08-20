import {Context} from '../../types'
import {TrialFragment} from '../fragments/TrialFragment'

export const TrialQueries = {
  trials: async (_: any, __: any, ctx: Context) => {
    return await ctx.prisma.trials().$fragment(TrialFragment)
  },
  trial: async (_: any, {trialId}: any, ctx: Context) => {
    return await ctx.prisma.trial({id: trialId}).$fragment(TrialFragment)
  },
  trialLeaders: async (_: any, {trialId}: any, ctx: Context) => {
    return await ctx.prisma.trial({id: trialId}).results({
      orderBy: 'wpm_DESC',
      first: 10,
    })
  },
}
