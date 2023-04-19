import { t, publicProcedure } from "./helpers/createRouter";
import { DoctorAggregateSchema } from "../schemas/aggregateDoctor.schema";
import { DoctorCreateManySchema } from "../schemas/createManyDoctor.schema";
import { DoctorCreateOneSchema } from "../schemas/createOneDoctor.schema";
import { DoctorDeleteManySchema } from "../schemas/deleteManyDoctor.schema";
import { DoctorDeleteOneSchema } from "../schemas/deleteOneDoctor.schema";
import { DoctorFindFirstSchema } from "../schemas/findFirstDoctor.schema";
import { DoctorFindManySchema } from "../schemas/findManyDoctor.schema";
import { DoctorFindUniqueSchema } from "../schemas/findUniqueDoctor.schema";
import { DoctorGroupBySchema } from "../schemas/groupByDoctor.schema";
import { DoctorUpdateManySchema } from "../schemas/updateManyDoctor.schema";
import { DoctorUpdateOneSchema } from "../schemas/updateOneDoctor.schema";
import { DoctorUpsertSchema } from "../schemas/upsertOneDoctor.schema";

export const doctorsRouter = t.router({
  aggregateDoctor: publicProcedure
    .input(DoctorAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDoctor = await ctx.prisma.doctor.aggregate(input);
      return aggregateDoctor;
    }),
  createManyDoctor: publicProcedure
    .input(DoctorCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyDoctor = await ctx.prisma.doctor.createMany(input);
      return createManyDoctor;
    }),
  createOneDoctor: publicProcedure
    .input(DoctorCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDoctor = await ctx.prisma.doctor.create(input);
      return createOneDoctor;
    }),
  deleteManyDoctor: publicProcedure
    .input(DoctorDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDoctor = await ctx.prisma.doctor.deleteMany(input);
      return deleteManyDoctor;
    }),
  deleteOneDoctor: publicProcedure
    .input(DoctorDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDoctor = await ctx.prisma.doctor.delete(input);
      return deleteOneDoctor;
    }),
  findFirstDoctor: publicProcedure
    .input(DoctorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDoctor = await ctx.prisma.doctor.findFirst(input);
      return findFirstDoctor;
    }),
  findFirstDoctorOrThrow: publicProcedure
    .input(DoctorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDoctorOrThrow = await ctx.prisma.doctor.findFirstOrThrow(input);
      return findFirstDoctorOrThrow;
    }),
  findManyDoctor: publicProcedure
    .input(DoctorFindManySchema).query(async ({ ctx, input }) => {
      const findManyDoctor = await ctx.prisma.doctor.findMany(input);
      return findManyDoctor;
    }),
  findUniqueDoctor: publicProcedure
    .input(DoctorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDoctor = await ctx.prisma.doctor.findUnique(input);
      return findUniqueDoctor;
    }),
  findUniqueDoctorOrThrow: publicProcedure
    .input(DoctorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDoctorOrThrow = await ctx.prisma.doctor.findUniqueOrThrow(input);
      return findUniqueDoctorOrThrow;
    }),
  groupByDoctor: publicProcedure
    .input(DoctorGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDoctor = await ctx.prisma.doctor.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDoctor;
    }),
  updateManyDoctor: publicProcedure
    .input(DoctorUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDoctor = await ctx.prisma.doctor.updateMany(input);
      return updateManyDoctor;
    }),
  updateOneDoctor: publicProcedure
    .input(DoctorUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDoctor = await ctx.prisma.doctor.update(input);
      return updateOneDoctor;
    }),
  upsertOneDoctor: publicProcedure
    .input(DoctorUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDoctor = await ctx.prisma.doctor.upsert(input);
      return upsertOneDoctor;
    }),

}) 
