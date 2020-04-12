import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialUpdateWithoutOwnerDataInput } from "../inputs/TrialUpdateWithoutOwnerDataInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpdateWithWhereUniqueWithoutOwnerInput {
  @Field(_type => TrialWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TrialWhereUniqueInput;

  @Field(_type => TrialUpdateWithoutOwnerDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TrialUpdateWithoutOwnerDataInput;
}
