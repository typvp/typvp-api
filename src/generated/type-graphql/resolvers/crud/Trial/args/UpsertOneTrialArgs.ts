import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateInput } from "../../../inputs/TrialCreateInput";
import { TrialUpdateInput } from "../../../inputs/TrialUpdateInput";
import { TrialWhereUniqueInput } from "../../../inputs/TrialWhereUniqueInput";

@ArgsType()
export class UpsertOneTrialArgs {
  @Field(_type => TrialWhereUniqueInput, { nullable: false })
  where!: TrialWhereUniqueInput;

  @Field(_type => TrialCreateInput, { nullable: false })
  create!: TrialCreateInput;

  @Field(_type => TrialUpdateInput, { nullable: false })
  update!: TrialUpdateInput;
}
