import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutResultsInput } from "../inputs/TrialCreateWithoutResultsInput";
import { TrialUpdateWithoutResultsDataInput } from "../inputs/TrialUpdateWithoutResultsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpsertWithoutResultsInput {
  @Field(_type => TrialUpdateWithoutResultsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TrialUpdateWithoutResultsDataInput;

  @Field(_type => TrialCreateWithoutResultsInput, {
    nullable: false,
    description: undefined
  })
  create!: TrialCreateWithoutResultsInput;
}
