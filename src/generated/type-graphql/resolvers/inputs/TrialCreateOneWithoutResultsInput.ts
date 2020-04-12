import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutResultsInput } from "../inputs/TrialCreateWithoutResultsInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialCreateOneWithoutResultsInput {
  @Field(_type => TrialCreateWithoutResultsInput, {
    nullable: true,
    description: undefined
  })
  create?: TrialCreateWithoutResultsInput | null;

  @Field(_type => TrialWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: TrialWhereUniqueInput | null;
}
