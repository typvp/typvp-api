import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";

export enum ResultType {
  SINGLEPLAYER = "SINGLEPLAYER",
  RACE = "RACE",
  TRIAL = "TRIAL"
}
registerEnumType(ResultType, {
  name: "ResultType",
  description: undefined,
});
