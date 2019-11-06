import {Field, Int, InputType} from 'type-graphql'

@InputType()
export class PaginationArgs {
  @Field(type => Int, {defaultValue: 0})
  skip: number

  @Field(type => Int, {defaultValue: 15})
  first: number
}
