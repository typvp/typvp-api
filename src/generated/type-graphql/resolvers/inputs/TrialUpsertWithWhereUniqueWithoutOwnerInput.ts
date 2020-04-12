import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutOwnerInput } from "../inputs/TrialCreateWithoutOwnerInput";
import { TrialUpdateWithoutOwnerDataInput } from "../inputs/TrialUpdateWithoutOwnerDataInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpsertWithWhereUniqueWithoutOwnerInput {
  @Field(_type => TrialWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TrialWhereUniqueInput;

  @Field(_type => TrialUpdateWithoutOwnerDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TrialUpdateWithoutOwnerDataInput;

  @Field(_type => TrialCreateWithoutOwnerInput, {
    nullable: false,
    description: undefined
  })
  create!: TrialCreateWithoutOwnerInput;
}
