import {ObjectType, Field, ID, registerEnumType, Float} from 'type-graphql'
import {Test, ResultType} from '../typingTest/test.type'

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

  @Field(type => String)
  createdAt: string

  @Field(type => String)
  updatedAt: string

  @Field(type => String)
  email: string

  @Field(type => String)
  username: string

  @Field(type => Role)
  role: keyof typeof Role

  @Field(type => [Test])
  results?: Test[]

  @Field(type => Float, {nullable: true})
  lastSeen?: number

  @Field(type => ResultType, {nullable: true})
  lastPlayed?: keyof typeof ResultType
}

@ObjectType()
export class AuthPayload {
  @Field(type => String)
  token: string

  @Field(type => Account)
  account: Account
}
