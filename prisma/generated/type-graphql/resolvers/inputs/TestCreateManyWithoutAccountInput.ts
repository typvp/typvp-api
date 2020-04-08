import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateWithoutAccountInput } from "../inputs/TestCreateWithoutAccountInput";
import { TestWhereUniqueInput } from "../inputs/TestWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestCreateManyWithoutAccountInput {
  @Field(_type => [TestCreateWithoutAccountInput], {
    nullable: true,
    description: undefined
  })
  create?: TestCreateWithoutAccountInput[] | null;

  @Field(_type => [TestWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TestWhereUniqueInput[] | null;
}
