import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateManyWithoutTestInput } from "../inputs/TrialCreateManyWithoutTestInput";
import { ResultType } from "../../enums/ResultType";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestCreateWithoutAccountInput {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  correct!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  corrections!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  cpm!: number;

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
    nullable: false,
    description: undefined
  })
  incorrect!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  rawCpm!: number;

  @Field(_type => ResultType, {
    nullable: false,
    description: undefined
  })
  type!: keyof typeof ResultType;

  @Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  updatedAt!: Date;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  wordIndex!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  wpm!: number;

  @Field(_type => TrialCreateManyWithoutTestInput, {
    nullable: true,
    description: undefined
  })
  Trial?: TrialCreateManyWithoutTestInput | null;
}
