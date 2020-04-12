import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { OrderByArg } from "../../enums/OrderByArg";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestOrderByInput {
  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  correct?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  corrections?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  cpm?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  incorrect?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  rawCpm?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  type?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  wordIndex?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  wpm?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  trial?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  trialId?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  account?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  accountId?: keyof typeof OrderByArg | null;
}
