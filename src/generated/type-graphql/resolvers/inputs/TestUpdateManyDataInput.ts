import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ResultType } from "../../enums/ResultType";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestUpdateManyDataInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  correct?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  corrections?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  cpm?: number | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  incorrect?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  rawCpm?: number | null;

  @Field(_type => ResultType, {
    nullable: true,
    description: undefined
  })
  type?: keyof typeof ResultType | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  wordIndex?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  wpm?: number | null;
}
