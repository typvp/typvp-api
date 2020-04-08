import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneTrialArgs } from "./args/CreateOneTrialArgs";
import { DeleteManyTrialArgs } from "./args/DeleteManyTrialArgs";
import { DeleteOneTrialArgs } from "./args/DeleteOneTrialArgs";
import { FindManyTrialArgs } from "./args/FindManyTrialArgs";
import { FindOneTrialArgs } from "./args/FindOneTrialArgs";
import { UpdateManyTrialArgs } from "./args/UpdateManyTrialArgs";
import { UpdateOneTrialArgs } from "./args/UpdateOneTrialArgs";
import { UpsertOneTrialArgs } from "./args/UpsertOneTrialArgs";
import { Trial } from "../../../models/Trial";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Trial)
export class TrialCrudResolver {
  @Query(_returns => Trial, {
    nullable: true,
    description: undefined
  })
  async trial(@Ctx() ctx: any, @Args() args: FindOneTrialArgs): Promise<Trial | null> {
    return ctx.prisma.trial.findOne(args);
  }

  @Query(_returns => [Trial], {
    nullable: false,
    description: undefined
  })
  async trials(@Ctx() ctx: any, @Args() args: FindManyTrialArgs): Promise<Trial[]> {
    return ctx.prisma.trial.findMany(args);
  }

  @Mutation(_returns => Trial, {
    nullable: false,
    description: undefined
  })
  async createOneTrial(@Ctx() ctx: any, @Args() args: CreateOneTrialArgs): Promise<Trial> {
    return ctx.prisma.trial.create(args);
  }

  @Mutation(_returns => Trial, {
    nullable: true,
    description: undefined
  })
  async deleteOneTrial(@Ctx() ctx: any, @Args() args: DeleteOneTrialArgs): Promise<Trial | null> {
    return ctx.prisma.trial.delete(args);
  }

  @Mutation(_returns => Trial, {
    nullable: true,
    description: undefined
  })
  async updateOneTrial(@Ctx() ctx: any, @Args() args: UpdateOneTrialArgs): Promise<Trial | null> {
    return ctx.prisma.trial.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTrial(@Ctx() ctx: any, @Args() args: DeleteManyTrialArgs): Promise<BatchPayload> {
    return ctx.prisma.trial.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTrial(@Ctx() ctx: any, @Args() args: UpdateManyTrialArgs): Promise<BatchPayload> {
    return ctx.prisma.trial.updateMany(args);
  }

  @Mutation(_returns => Trial, {
    nullable: false,
    description: undefined
  })
  async upsertOneTrial(@Ctx() ctx: any, @Args() args: UpsertOneTrialArgs): Promise<Trial> {
    return ctx.prisma.trial.upsert(args);
  }
}
