import {ObjectType, Field, ID, Int, registerEnumType} from 'type-graphql'

@ObjectType()
export class Player {
  @Field(type => String)
  id: string

  @Field(type => Int)
  wpm: number

  @Field(type => String)
  name: string
}

@ObjectType()
export class Lobby {
  @Field(type => String)
  id: string

  @Field(type => Boolean, {nullable: true})
  default?: boolean

  @Field(type => Int, {nullable: true})
  countdown?: number

  @Field(type => Int)
  secondsRemaining: number

  @Field(type => Boolean)
  acceptUpdates: boolean

  @Field(type => String)
  name: string

  @Field(type => String)
  state: string

  @Field(type => Player)
  players: any[]
}
