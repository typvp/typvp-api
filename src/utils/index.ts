import * as jwt from 'jsonwebtoken'

import {Context} from '../types'
import {NewTestInput} from '../resolvers/typingTest/test.input'
import {Account} from '../resolvers/account/account.type'

export function getAccountId(ctx: Context) {
  const Authorization = ctx.req.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const {accountId} = jwt.verify(token, process.env.APP_SECRET) as {
      accountId: string
    }
    return accountId
  }

  throw new Error('not auth')
}

interface IStickyKeys {
  (results: NewTestInput, user: Account, options: any): boolean
}

export const stickyKeys: IStickyKeys = function(
  results,
  user,
  options,
): boolean {
  const _cpm = options.wordList.length
  console.log(`total length: ${_cpm}`)

  const _listToArray = options.wordList.split('|')
  console.log(`length of words: ${_listToArray.length}`)

  const arraySlice = _listToArray.slice(0, results.wordIndex - 1)

  let acCPM = 0
  arraySlice.map((word: string, idx: number) => {
    acCPM += word.length
  })

  console.log(`AC vs cpm: ${acCPM + results.wordIndex} || ${results.cpm}`)

  // You can't type more than the number of generated words
  if (results.wpm > 250) {
    console.log('failed wpm')
    return false
  }
  // More valid characters than the max
  if (results.cpm > _cpm) {
    console.log('failed cpm')
    return false
  }
  // Mismatched mode
  if (user.lastPlayed !== options.mode) {
    console.log('failed mode')
    return false
  }
  // Either a delayed ass mutation, or some form of fudging
  if (Date.now() - user.lastSeen > 90 || Date.now() - user.lastSeen < 60) {
    console.log('failed date')
    return false
  }
  console.log('valid')
  return true
}
