import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialOrderByInput } from "../../../inputs/TrialOrderByInput";
import { TrialWhereInput } from "../../../inputs/TrialWhereInput";
import { TrialWhereUniqueInput } from "../../../inputs/TrialWhereUniqueInput";

@ArgsType()
export class TestTrialArgs {
  @Field(_type => TrialWhereInput, { nullable: true })
  where?: TrialWhereInput | null;

  @Field(_type => TrialOrderByInput, { nullable: true })
  orderBy?: TrialOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => TrialWhereUniqueInput, { nullable: true })
  after?: TrialWhereUniqueInput | null;

  @Field(_type => TrialWhereUniqueInput, { nullable: true })
  before?: TrialWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
