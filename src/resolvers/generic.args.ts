import {Field, Int, InputType} from 'type-graphql'
import {TestOrderByInput} from '../generated/prisma-client'
import {ResultType} from './typingTest/test.type'

@InputType()
export class PaginationArgs {
  @Field(type => Int, {defaultValue: 0})
  skip: number

  @Field(type => Int, {defaultValue: 15})
  first: number
}

@InputType()
export class FilterArgs extends PaginationArgs {
  @Field(type => String, {defaultValue: 'createdAt_DESC'})
  date: TestOrderByInput

  @Field(type => String, {defaultValue: null})
  type: ResultType
}
