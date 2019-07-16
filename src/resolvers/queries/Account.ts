import {Context} from '../../types'
import {AccountFragment} from '../fragments/AccountFragment'
import {getAccountId} from '../../utils'

export const AccountQueries = {
  account: async (_: any, {id}: any, ctx: Context) => {
    return await ctx.prisma.account({id}).$fragment(AccountFragment)
  },
  me: async (_: any, __: any, ctx: Context) => {
    const userId = getAccountId(ctx)
    return await ctx.prisma.account({id: userId}).$fragment(AccountFragment)
  },
}
