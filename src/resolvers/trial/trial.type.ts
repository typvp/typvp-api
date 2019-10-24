import {ObjectType, Field, ID, Int, registerEnumType} from 'type-graphql'
import {Test} from '../TypingTest/test.type'

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

  @Field(type => Date)
  createdAt: Date

  @Field(type => Date)
  updatedAt: Date

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
}
