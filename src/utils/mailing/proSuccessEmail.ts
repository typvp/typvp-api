import {emailQueue} from '../bull'
import {Account} from '../../resolvers/account/account.type'

type ProSuccessJobData = {
  account: Account
  type: string
}

export const startProSuccessProcess = async (account: Account) => {
  const data: ProSuccessJobData = {
    account,
    type: 'Pro_Success',
  }
  await emailQueue.add(data)
}
