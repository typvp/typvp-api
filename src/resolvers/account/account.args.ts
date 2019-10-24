import {Field, ArgsType, ID} from 'type-graphql'

@ArgsType()
export class AccountArgs {
  @Field(type => ID)
  id: string
}
