import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateInput } from "../../../inputs/TrialCreateInput";

@ArgsType()
export class CreateOneTrialArgs {
  @Field(_type => TrialCreateInput, { nullable: false })
  data!: TrialCreateInput;
}
