import {v4} from 'uuid'

import {confirmEmailQueue} from './bull'
import {redis} from '../services/redis'
import {Account} from '../resolvers/account/account.type'

export const startEmailConfirmationProcess = async (
  account: Account,
  request: any,
) => {
  const id = v4()
  await redis.set(id, account.id, 'ex', 60 * 60 * 24)
  const url = `${request.protocol}://${request.get('host')}/confirm/${id}`
  await confirmEmailQueue.add({
    email: account.email,
    url,
  })
}
