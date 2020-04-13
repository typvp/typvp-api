import * as jwt from 'jsonwebtoken'

import {Context} from '../types'
import {NewTestInput} from '../resolvers/typingTest/test.input'
import {ResultType} from '../resolvers/typingTest/test.type'
import {Account} from '../generated/type-graphql'
import {ExclusiveCreateOneTestInput} from '../resolvers/typingTest/TestResolver'

export function getAccountId(ctx: Context) {
  const Authorization = ctx.req.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const {accountId} = jwt.verify(token, process.env.APP_SECRET) as {
      accountId: string
    }
    return accountId
  }

  return false
}

type StickyKeysOptions = {
  wordList: string
  mode: keyof typeof ResultType
}

export function stickyKeys(
  results: ExclusiveCreateOneTestInput,
  user: Account,
  options: StickyKeysOptions,
): boolean {
  if (!options.wordList) {
    console.log('failed no cached wordlist')
    return false
  }

  const _cpm = options.wordList.length
  console.log(`total length: ${_cpm}`)

  const _listToArray = options.wordList.split('|')
  console.log(`length of words: ${_listToArray.length}`)

  const arraySlice = _listToArray.slice(0, results.wordIndex - 1)

  let acCPM = 0
  arraySlice.map((word: string) => {
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
  if (
    (Date.now() - user.lastSeen) / 1000 > 90 ||
    (Date.now() - user.lastSeen) / 1000 < 60
  ) {
    console.log('failed date')
    return false
  }
  console.log('valid')
  return true
}
