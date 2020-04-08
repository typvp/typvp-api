import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Difficulty } from "../../enums/Difficulty";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NullableDifficultyFilter {
  @Field(_type => Difficulty, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof Difficulty | null;

  @Field(_type => Difficulty, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof Difficulty | null;

  @Field(_type => [Difficulty], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof Difficulty> | null;

  @Field(_type => [Difficulty], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof Difficulty> | null;
}
