import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialWhereInput } from "../../../inputs/TrialWhereInput";

@ArgsType()
export class DeleteManyTrialArgs {
  @Field(_type => TrialWhereInput, { nullable: true })
  where?: TrialWhereInput | null;
}
