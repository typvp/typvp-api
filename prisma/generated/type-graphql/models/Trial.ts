import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../models/Account";
import { Test } from "../models/Test";
import { Difficulty } from "../enums/Difficulty";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Trial {
  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined,
  })
  custom?: boolean | null;

  @Field(_type => Difficulty, {
    nullable: true,
    description: undefined,
  })
  difficulty?: keyof typeof Difficulty | null;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @Field(_type => Int, {
    nullable: true,
    description: undefined,
  })
  maxWordLength?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined,
  })
  minWordLength?: number | null;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  owner?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined,
  })
  private?: boolean | null;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  wordSet!: string;

  Account?: Account | null;

  Test?: Test[] | null;
}
