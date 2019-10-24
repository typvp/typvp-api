import {ObjectType, Field, ID, Int, registerEnumType} from 'type-graphql'
import {Account} from '../account/account.type'

export enum ResultType {
  SINGLEPLAYER,
  RACE,
  TRIAL,
}

registerEnumType(ResultType, {
  name: 'ResultType',
})

@ObjectType()
export class Test {
  @Field(type => ID)
  id: string

  @Field(type => Date)
  createdAt: Date

  @Field(type => Date)
  updatedAt: Date

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

  @Field(type => Account)
  account: Account

  @Field(type => ResultType)
  type: ResultType
}
