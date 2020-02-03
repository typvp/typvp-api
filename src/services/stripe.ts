import Stripe from 'stripe'
import {Request, Response} from 'express'

const key =
  process.env.NODE_ENV === 'production'
    ? process.env.STRIPE_PROD
    : process.env.STRIPE_TEST

export const stripe = new Stripe(key, {
  apiVersion: '2019-12-03',
  typescript: true,
})

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

  const data: Stripe.Event.Data = event.data
  const eventType: string = event.type

  if (eventType === 'checkout.session.completed') {
    const session: any = event.data.object
    console.log(session)
    const cust = await stripe.customers.retrieve(session.customer)
    console.log(cust)
    // todo: get email and then set user as pro
  }
}
