import {ObjectType, Field, ID, Int, registerEnumType} from 'type-graphql'
import {Test} from '../typingTest/test.type'

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: 'Role',
})

@ObjectType()
export class Account {
  @Field(type => ID)
  id: string

  @Field(type => Date)
  createdAt: string

  @Field(type => Date)
  updatedAt: string

  @Field(type => String)
  email: string

  @Field(type => String)
  username: string

  @Field(type => Role)
  role: keyof typeof Role

  @Field(type => [Test])
  results?: Test[]
}

@ObjectType()
export class AuthPayload {
  @Field(type => String)
  token: string

  @Field(type => Account)
  account: Account
}
