import {ObjectType, Field, ID, Int, registerEnumType} from 'type-graphql'
import {Account} from '../account/account.type'

export enum ResultType {
  SINGLEPLAYER = 'SINGLEPLAYER',
  RACE = 'RACE',
  TRIAL = 'TRIAL',
}

registerEnumType(ResultType, {
  name: 'ResultType',
})

@ObjectType()
export class Test {
  @Field(type => ID)
  id: string

  @Field(type => String)
  createdAt: string

  @Field(type => String)
  updatedAt: string

  @Field(type => Int)
  cpm: number

  @Field(type => Int)
  rawCpm: number

  @Field(type => Int)
  wpm: number

  @Field(type => Int)
  correct: number

  @Field(type => Int)
  incorrect: number

  @Field(type => Int)
  corrections: number

  @Field(type => Int)
  wordIndex: number

  @Field(type => Account)
  account?: Account

  @Field(type => ResultType)
  type: keyof typeof ResultType
}

@ObjectType()
export class TestsWithCount {
  @Field(type => [Test])
  results: Test[]

  @Field(type => Int)
  testCount: number
}
