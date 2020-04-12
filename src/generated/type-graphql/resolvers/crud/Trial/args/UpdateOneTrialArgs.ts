import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialUpdateInput } from "../../../inputs/TrialUpdateInput";
import { TrialWhereUniqueInput } from "../../../inputs/TrialWhereUniqueInput";

@ArgsType()
export class UpdateOneTrialArgs {
  @Field(_type => TrialUpdateInput, { nullable: false })
  data!: TrialUpdateInput;

  @Field(_type => TrialWhereUniqueInput, { nullable: false })
  where!: TrialWhereUniqueInput;
}
