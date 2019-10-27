import {Field, InputType, Int, ID} from 'type-graphql'
import {Test} from '../typingTest/test.type'

@InputType()
export class NewTrialResultInput implements Partial<Test> {
  @Field(type => ID)
  trialId: string

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
}
