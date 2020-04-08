import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutTestInput } from "../inputs/TrialCreateWithoutTestInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialCreateManyWithoutTestInput {
  @Field(_type => [TrialCreateWithoutTestInput], {
    nullable: true,
    description: undefined
  })
  create?: TrialCreateWithoutTestInput[] | null;

  @Field(_type => [TrialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TrialWhereUniqueInput[] | null;
}
