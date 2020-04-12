import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialWhereUniqueInput } from "../../../inputs/TrialWhereUniqueInput";

@ArgsType()
export class FindOneTrialArgs {
  @Field(_type => TrialWhereUniqueInput, { nullable: false })
  where!: TrialWhereUniqueInput;
}
