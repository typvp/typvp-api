import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../models/Account";
import { Trial } from "../models/Trial";
import { ResultType } from "../enums/ResultType";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Test {
  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  correct!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  corrections!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  cpm!: number;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  incorrect!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  rawCpm!: number;

  @Field(_type => ResultType, {
    nullable: false,
    description: undefined,
  })
  type!: keyof typeof ResultType;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  wordIndex!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  wpm!: number;

  trial?: Trial | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  trialId?: string | null;

  account?: Account;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  accountId!: string;
}
