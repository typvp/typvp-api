import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { ResultType } from "../../enums/ResultType";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NullableResultTypeFilter {
  @Field(_type => ResultType, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof ResultType | null;

  @Field(_type => ResultType, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof ResultType | null;

  @Field(_type => [ResultType], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof ResultType> | null;

  @Field(_type => [ResultType], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof ResultType> | null;
}
