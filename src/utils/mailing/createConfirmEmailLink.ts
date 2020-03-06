import {v4} from 'uuid'

import {emailQueue} from '../bull'
import {redis} from '../../services/redis'
import {Account} from '../../resolvers/account/account.type'

type ConfirmEmailJobData = {
  url: string
  account: Account
  type: string
}

export const startEmailConfirmationProcess = async (account: Account) => {
  const id = v4()
  await redis.set(id, account.id, 'ex', 2592000) // 1 month expiry
  // const url = `https://typvp.xyz/confirm?id=${id}`
  const url = `localhost:8082/confirm?id=${id}`
  const data: ConfirmEmailJobData = {
    url,
    account,
    type: 'Verify_Fresh',
  }
  await emailQueue.add(data)
}
