import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutOwnerInput } from "../inputs/TrialCreateWithoutOwnerInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialCreateManyWithoutOwnerInput {
  @Field(_type => [TrialCreateWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  create?: TrialCreateWithoutOwnerInput[] | null;

  @Field(_type => [TrialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TrialWhereUniqueInput[] | null;
}
