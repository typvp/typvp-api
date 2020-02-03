import express, {Request} from 'express'
import http from 'http'
import cors from 'cors'

import {redis} from './redis'
import {prisma} from '../generated/prisma-client'
import {handlePaymentWebbook} from './stripe'

export const app = express()

export const socketServer = http.createServer(app).listen(8086)

export async function initExpress() {
  app.disable('x-powered-by')
  app.use(
    cors({
      credentials: true,
      origin: [
        'https://typvp.xyz',
        'https://next.typvp.xyz',
        'http://localhost:8082',
      ],
    }),
    express.json({
      verify: function(req: Request, res, buf) {
        if (req.originalUrl.startsWith('/webhook')) {
          req.rawBody = buf.toString()
        }
      },
    }),
  )
  app.get('/confirm/:id', async (req, res) => {
    const {id} = req.params
    const userId = await redis.get(id)
    if (userId) {
      const account = await prisma.updateAccount({
        where: {
          id: userId,
        },
        data: {confirmed: true},
      })
      res.send(
        `
          <script>
            setTimeout(function () {
              window.location.replace("https://typvp.xyz");
            }, 5000)
          </script>
          Email for account ${account.username} has been verified! Redirecting you to typvp in 5 seconds...
        `,
      )
    } else {
      res.send('It looks like your email validation link expired...')
    }
  })
  app.post('/webhook', async (req, res) => handlePaymentWebbook(req, res))
}
