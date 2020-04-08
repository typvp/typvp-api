import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  PRO = "PRO",
  BETA = "BETA"
}
registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
