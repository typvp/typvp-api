import {Field, InputType} from 'type-graphql'

@InputType()
export class AccountSignupInput {
  @Field(type => String)
  email: string

  @Field(type => String)
  password: string

  @Field(type => String)
  username: string
}

@InputType()
export class AccountLoginInput {
  @Field(type => String)
  username: string

  @Field(type => String)
  password: string
}
