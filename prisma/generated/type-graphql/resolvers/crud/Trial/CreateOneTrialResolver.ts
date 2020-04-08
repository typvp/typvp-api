import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneTrialArgs } from "./args/CreateOneTrialArgs";
import { Trial } from "../../../models/Trial";

@Resolver(_of => Trial)
export class CreateOneTrialResolver {
  @Mutation(_returns => Trial, {
    nullable: false,
    description: undefined
  })
  async createOneTrial(@Ctx() ctx: any, @Args() args: CreateOneTrialArgs): Promise<Trial> {
    return ctx.prisma.trial.create(args);
  }
}
