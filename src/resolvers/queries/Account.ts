import {Context} from '../../types'
import {AccountFragment} from '../fragments/AccountFragment'

export const AccountQueries = {
  account: async (_, {id}, ctx: Context) => {
    return await ctx.prisma.account({id}).$fragment(AccountFragment)
  },
}
