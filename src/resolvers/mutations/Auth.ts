import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import {Context} from '../../types'

export const Auth = {
  async signup(_, {email, password, username}, ctx: Context) {
    try {
      const accountExists = await ctx.prisma.$exists.account({
        email,
      })

      if (accountExists) {
        throw new Error('Account with email already exists')
      }

      password = await bcrypt.hash(password, 10)

      const account = await ctx.prisma
        .createAccount({
          email: email,
          password: password,
          username: username,
          role: 'USER',
          profile: {create: {}},
        })
        .profile()

      return {
        token: jwt.sign({accountId: account.id}, process.env.APP_SECRET),
        account,
      }
    } catch (err) {
      throw err
    }
  },
  async login(_, {email, password}, ctx: Context) {
    try {
      // make sure the account exists first
      const account = await ctx.prisma.account({email: email})

      if (!account) {
        throw new Error(
          `Cannot find account associated with the email: ${email}`,
        )
      }

      // then validate their credentials
      const valid = await bcrypt.compare(password, account.password)

      if (!valid) {
        throw new Error('Invalid email or password')
      }

      // everything checks out, send them back some data
      return {
        token: jwt.sign({accountId: account.id}, process.env.APP_SECRET),
        account,
      }
    } catch (err) {
      throw err
    }
  },
}
