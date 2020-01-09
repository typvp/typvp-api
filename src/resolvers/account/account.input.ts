import {Field, InputType} from 'type-graphql'
import {IsEmail, IsString, Max, Min} from 'class-validator'

@InputType()
export class AccountSignupInput {
  @Field(type => String)
  @IsEmail()
  email: string

  @Field(type => String)
  @IsString()
  @Min(5)
  @Max(25)
  password: string

  @Field(type => String)
  @IsString()
  @Min(3)
  @Max(15)
  username: string
}

@InputType()
export class AccountLoginInput {
  @Field(type => String)
  username: string

  @Field(type => String)
  password: string
}
