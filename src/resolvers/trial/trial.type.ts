import {ObjectType, Field, ID, Int, registerEnumType} from 'type-graphql'
import {Test} from '../typingTest/test.type'
import {Account} from '../account/account.type'

export enum Difficulty {
  EASY = 'EASY',
  NORMAL = 'NORMAL',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

registerEnumType(Difficulty, {
  name: 'Difficulty',
})

@ObjectType()
export class Trial {
  @Field(type => ID)
  id: string

  @Field(type => String)
  createdAt: string

  @Field(type => String)
  updatedAt: string

  @Field(type => [Test])
  results: Test[]

  @Field(type => String)
  wordSet: string

  @Field(type => String)
  name: string

  @Field(type => Difficulty)
  difficulty: Difficulty

  @Field(type => Int)
  minWordLength: number

  @Field(type => Int)
  maxWordLength: number

  @Field(type => Boolean)
  custom: boolean

  @Field(type => Boolean)
  private: boolean

  @Field(type => Account, {nullable: true})
  owner?: Account
}
