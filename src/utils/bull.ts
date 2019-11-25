import Queue from 'bull'

export const confirmEmailQueue = new Queue('confirm-email', {
  redis: {
    port: process.env.REDIS_PORT as any,
    password: process.env.REDIS_PASSWORD as string,
  },
})
