import {Field, Int, InputType} from 'type-graphql'
import {Test} from './test.type'

@InputType()
export class NewTestInput implements Partial<Test> {
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
}
