import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountWhereInput } from "../inputs/AccountWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { ResultTypeFilter } from "../inputs/ResultTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TrialWhereInput } from "../inputs/TrialWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestWhereInput {
  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  correct?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  corrections?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  cpm?: IntFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  incorrect?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  rawCpm?: IntFilter | null;

  @Field(_type => ResultTypeFilter, {
    nullable: true,
    description: undefined
  })
  type?: ResultTypeFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  wordIndex?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  wpm?: IntFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  trialId?: NullableStringFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  accountId?: StringFilter | null;

  @Field(_type => [TestWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TestWhereInput[] | null;

  @Field(_type => [TestWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TestWhereInput[] | null;

  @Field(_type => [TestWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TestWhereInput[] | null;

  @Field(_type => TrialWhereInput, {
    nullable: true,
    description: undefined
  })
  trial?: TrialWhereInput | null;

  @Field(_type => AccountWhereInput, {
    nullable: true,
    description: undefined
  })
  account?: AccountWhereInput | null;
}
