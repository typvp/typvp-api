import Stripe from 'stripe'
import {Request, Response} from 'express'

import {prisma} from '../services/prisma'
import {startProNAMProcess} from '../utils/mailing/proNoAccountMatchEmail'
import {startProSuccessProcess} from '../utils/mailing/proSuccessEmail'

const key =
  process.env.NODE_ENV === 'production'
    ? process.env.STRIPE_PROD
    : process.env.STRIPE_TEST

export const stripe = new Stripe(key, {
  apiVersion: '2020-03-02',
  typescript: true,
})

async function applyProToAccount(email: string) {
  try {
    const account = await prisma.account.update({
      where: {
        email,
      },
      data: {
        role: 'PRO',
      },
    })
    startProSuccessProcess(account)
  } catch (e) {
    startProNAMProcess(email)
  }
}

export const handlePaymentWebbook = async (req: Request, res: Response) => {
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      req.headers['stripe-signature'],
      process.env.STRIPE_WH,
    )
  } catch (e) {
    console.log(`⚠️  Webhook signature verification failed.`)
    res.sendStatus(400)
    return
  }

  const eventType: string = event.type

  if (eventType === 'checkout.session.completed') {
    const data = event.data.object as Stripe.Checkout.Session
    console.log('data', data)
    const {email} = (await stripe.customers.retrieve(
      data.customer,
    )) as Stripe.Customer

    console.log(email)

    applyProToAccount(email)
  }
  res.json({received: true})
}
