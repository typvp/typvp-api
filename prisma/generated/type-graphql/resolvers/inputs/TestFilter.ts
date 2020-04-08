import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestWhereInput } from "../inputs/TestWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestFilter {
  @Field(_type => TestWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: TestWhereInput | null;

  @Field(_type => TestWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: TestWhereInput | null;

  @Field(_type => TestWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: TestWhereInput | null;
}
