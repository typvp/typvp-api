import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialScalarWhereInput } from "../inputs/TrialScalarWhereInput";
import { TrialUpdateManyDataInput } from "../inputs/TrialUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpdateManyWithWhereNestedInput {
  @Field(_type => TrialScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: TrialScalarWhereInput;

  @Field(_type => TrialUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TrialUpdateManyDataInput;
}
