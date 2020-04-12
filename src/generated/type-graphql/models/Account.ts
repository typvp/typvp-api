import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Test } from "../models/Test";
import { Trial } from "../models/Trial";
import { Role } from "../enums/Role";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Account {
  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  color?: string | null;

  @Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  confirmed!: boolean;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  lastPlayed?: string | null;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  lastSeen!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  password!: string;

  @Field(_type => Role, {
    nullable: false,
    description: undefined,
  })
  role!: keyof typeof Role;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  username!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  usernameLowercase?: string | null;

  tests?: Test[] | null;

  trials?: Trial[] | null;
}
