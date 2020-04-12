import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";

export enum Difficulty {
  EASY = "EASY",
  NORMAL = "NORMAL",
  MEDIUM = "MEDIUM",
  HARD = "HARD"
}
registerEnumType(Difficulty, {
  name: "Difficulty",
  description: undefined,
});
