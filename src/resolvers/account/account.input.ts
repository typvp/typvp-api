import {Field, InputType} from 'type-graphql'
import {IsEmail, IsString, Length} from 'class-validator'

@InputType()
export class AccountSignupInput {
  @Field(type => String)
  @IsEmail()
  email: string

  @Field(type => String)
  @IsString()
  @Length(5, 25)
  password: string

  @Field(type => String)
  @IsString()
  @Length(3, 15)
  username: string
}

@InputType()
export class AccountLoginInput {
  @Field(type => String)
  username: string

  @Field(type => String)
  password: string
}
