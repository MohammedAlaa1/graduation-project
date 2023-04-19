import { t, publicProcedure } from "./helpers/createRouter";
import { PatientAggregateSchema } from "../schemas/aggregatePatient.schema";
import { PatientCreateManySchema } from "../schemas/createManyPatient.schema";
import { PatientCreateOneSchema } from "../schemas/createOnePatient.schema";
import { PatientDeleteManySchema } from "../schemas/deleteManyPatient.schema";
import { PatientDeleteOneSchema } from "../schemas/deleteOnePatient.schema";
import { PatientFindFirstSchema } from "../schemas/findFirstPatient.schema";
import { PatientFindManySchema } from "../schemas/findManyPatient.schema";
import { PatientFindUniqueSchema } from "../schemas/findUniquePatient.schema";
import { PatientGroupBySchema } from "../schemas/groupByPatient.schema";
import { PatientUpdateManySchema } from "../schemas/updateManyPatient.schema";
import { PatientUpdateOneSchema } from "../schemas/updateOnePatient.schema";
import { PatientUpsertSchema } from "../schemas/upsertOnePatient.schema";

export const patientsRouter = t.router({
  aggregatePatient: publicProcedure
    .input(PatientAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePatient = await ctx.prisma.patient.aggregate(input);
      return aggregatePatient;
    }),
  createManyPatient: publicProcedure
    .input(PatientCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPatient = await ctx.prisma.patient.createMany(input);
      return createManyPatient;
    }),
  createOnePatient: publicProcedure
    .input(PatientCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePatient = await ctx.prisma.patient.create(input);
      return createOnePatient;
    }),
  deleteManyPatient: publicProcedure
    .input(PatientDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPatient = await ctx.prisma.patient.deleteMany(input);
      return deleteManyPatient;
    }),
  deleteOnePatient: publicProcedure
    .input(PatientDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePatient = await ctx.prisma.patient.delete(input);
      return deleteOnePatient;
    }),
  findFirstPatient: publicProcedure
    .input(PatientFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPatient = await ctx.prisma.patient.findFirst(input);
      return findFirstPatient;
    }),
  findFirstPatientOrThrow: publicProcedure
    .input(PatientFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPatientOrThrow = await ctx.prisma.patient.findFirstOrThrow(input);
      return findFirstPatientOrThrow;
    }),
  findManyPatient: publicProcedure
    .input(PatientFindManySchema).query(async ({ ctx, input }) => {
      const findManyPatient = await ctx.prisma.patient.findMany(input);
      return findManyPatient;
    }),
  findUniquePatient: publicProcedure
    .input(PatientFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePatient = await ctx.prisma.patient.findUnique(input);
      return findUniquePatient;
    }),
  findUniquePatientOrThrow: publicProcedure
    .input(PatientFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePatientOrThrow = await ctx.prisma.patient.findUniqueOrThrow(input);
      return findUniquePatientOrThrow;
    }),
  groupByPatient: publicProcedure
    .input(PatientGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPatient = await ctx.prisma.patient.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPatient;
    }),
  updateManyPatient: publicProcedure
    .input(PatientUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPatient = await ctx.prisma.patient.updateMany(input);
      return updateManyPatient;
    }),
  updateOnePatient: publicProcedure
    .input(PatientUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePatient = await ctx.prisma.patient.update(input);
      return updateOnePatient;
    }),
  upsertOnePatient: publicProcedure
    .input(PatientUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePatient = await ctx.prisma.patient.upsert(input);
      return upsertOnePatient;
    }),

}) 
