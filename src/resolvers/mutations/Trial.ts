import {Context} from '../../types'
import {getAccountId} from '../../utils'

export const TrialMutations = {
  addResults: async (
    _: any,
    {trialId, cpm, rawCpm, wpm, correct, incorrect, corrections}: any,
    ctx: Context,
  ) => {
    const accountId = getAccountId(ctx)

    return await ctx.prisma.updateTrial({
      where: {
        id: trialId,
      },
      data: {
        results: {
          create: {
            account: {
              connect: {
                id: accountId,
              },
            },
            cpm,
            rawCpm,
            wpm,
            correct,
            incorrect,
            corrections,
          },
        },
      },
    })
  },
}
