import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialUpdateManyMutationInput } from "../../../inputs/TrialUpdateManyMutationInput";
import { TrialWhereInput } from "../../../inputs/TrialWhereInput";

@ArgsType()
export class UpdateManyTrialArgs {
  @Field(_type => TrialUpdateManyMutationInput, { nullable: false })
  data!: TrialUpdateManyMutationInput;

  @Field(_type => TrialWhereInput, { nullable: true })
  where?: TrialWhereInput | null;
}
