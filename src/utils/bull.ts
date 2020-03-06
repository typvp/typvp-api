import Queue from 'bull'

export const emailQueue = new Queue('email', {
  redis: {
    port: process.env.REDIS_PORT as any,
    password: process.env.REDIS_PASSWORD as string,
  },
})
