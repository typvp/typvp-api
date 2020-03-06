import {emailQueue} from '../bull'

type ProNoAccountMatchJobData = {
  type: string
  paymentEmail: string
}

export const startProNAMProcess = async (email: string) => {
  const data: ProNoAccountMatchJobData = {
    type: 'Pro_NoAccountMatch',
    paymentEmail: email,
  }
  await emailQueue.add(data)
}
