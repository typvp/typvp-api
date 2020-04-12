import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialWhereInput } from "../inputs/TrialWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialFilter {
  @Field(_type => TrialWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: TrialWhereInput | null;

  @Field(_type => TrialWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: TrialWhereInput | null;

  @Field(_type => TrialWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: TrialWhereInput | null;
}
