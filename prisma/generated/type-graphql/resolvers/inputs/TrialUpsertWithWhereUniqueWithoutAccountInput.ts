import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutAccountInput } from "../inputs/TrialCreateWithoutAccountInput";
import { TrialUpdateWithoutAccountDataInput } from "../inputs/TrialUpdateWithoutAccountDataInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpsertWithWhereUniqueWithoutAccountInput {
  @Field(_type => TrialWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TrialWhereUniqueInput;

  @Field(_type => TrialUpdateWithoutAccountDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TrialUpdateWithoutAccountDataInput;

  @Field(_type => TrialCreateWithoutAccountInput, {
    nullable: false,
    description: undefined
  })
  create!: TrialCreateWithoutAccountInput;
}
