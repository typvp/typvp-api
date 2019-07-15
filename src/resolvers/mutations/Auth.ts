import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import {Context} from '../../types'

export const Auth = {
  signup: async (_, {email, password, username}, ctx: Context) => {
    try {
      const accountExists = await ctx.prisma.$exists.account({
        email,
      })

      if (accountExists) {
        throw new Error('Account with email already exists')
      }

      password = await bcrypt.hash(password, 10)

      const account = await ctx.prisma.createAccount({
        email: email,
        password: password,
        username: username,
        role: 'USER',
      })

      return {
        token: jwt.sign({accountId: account.id}, process.env.APP_SECRET),
        account,
      }
    } catch (err) {
      throw err
    }
  },
  login: async (_, {username, password}, ctx: Context) => {
    try {
      // make sure the account exists first
      const account = await ctx.prisma.account({username: username})

      if (!account) {
        throw new Error(
          `Cannot find account associated with the username: ${username}`,
        )
      }

      // then validate their credentials
      const valid = await bcrypt.compare(password, account.password)

      if (!valid) {
        throw new Error('Invalid username or password')
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
