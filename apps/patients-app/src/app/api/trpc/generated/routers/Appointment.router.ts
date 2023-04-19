import { t, publicProcedure } from "./helpers/createRouter";
import { AppointmentAggregateSchema } from "../schemas/aggregateAppointment.schema";
import { AppointmentCreateManySchema } from "../schemas/createManyAppointment.schema";
import { AppointmentCreateOneSchema } from "../schemas/createOneAppointment.schema";
import { AppointmentDeleteManySchema } from "../schemas/deleteManyAppointment.schema";
import { AppointmentDeleteOneSchema } from "../schemas/deleteOneAppointment.schema";
import { AppointmentFindFirstSchema } from "../schemas/findFirstAppointment.schema";
import { AppointmentFindManySchema } from "../schemas/findManyAppointment.schema";
import { AppointmentFindUniqueSchema } from "../schemas/findUniqueAppointment.schema";
import { AppointmentGroupBySchema } from "../schemas/groupByAppointment.schema";
import { AppointmentUpdateManySchema } from "../schemas/updateManyAppointment.schema";
import { AppointmentUpdateOneSchema } from "../schemas/updateOneAppointment.schema";
import { AppointmentUpsertSchema } from "../schemas/upsertOneAppointment.schema";

export const appointmentsRouter = t.router({
  aggregateAppointment: publicProcedure
    .input(AppointmentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateAppointment = await ctx.prisma.appointment.aggregate(input);
      return aggregateAppointment;
    }),
  createManyAppointment: publicProcedure
    .input(AppointmentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyAppointment = await ctx.prisma.appointment.createMany(input);
      return createManyAppointment;
    }),
  createOneAppointment: publicProcedure
    .input(AppointmentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneAppointment = await ctx.prisma.appointment.create(input);
      return createOneAppointment;
    }),
  deleteManyAppointment: publicProcedure
    .input(AppointmentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyAppointment = await ctx.prisma.appointment.deleteMany(input);
      return deleteManyAppointment;
    }),
  deleteOneAppointment: publicProcedure
    .input(AppointmentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneAppointment = await ctx.prisma.appointment.delete(input);
      return deleteOneAppointment;
    }),
  findFirstAppointment: publicProcedure
    .input(AppointmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAppointment = await ctx.prisma.appointment.findFirst(input);
      return findFirstAppointment;
    }),
  findFirstAppointmentOrThrow: publicProcedure
    .input(AppointmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAppointmentOrThrow = await ctx.prisma.appointment.findFirstOrThrow(input);
      return findFirstAppointmentOrThrow;
    }),
  findManyAppointment: publicProcedure
    .input(AppointmentFindManySchema).query(async ({ ctx, input }) => {
      const findManyAppointment = await ctx.prisma.appointment.findMany(input);
      return findManyAppointment;
    }),
  findUniqueAppointment: publicProcedure
    .input(AppointmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAppointment = await ctx.prisma.appointment.findUnique(input);
      return findUniqueAppointment;
    }),
  findUniqueAppointmentOrThrow: publicProcedure
    .input(AppointmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAppointmentOrThrow = await ctx.prisma.appointment.findUniqueOrThrow(input);
      return findUniqueAppointmentOrThrow;
    }),
  groupByAppointment: publicProcedure
    .input(AppointmentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByAppointment = await ctx.prisma.appointment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAppointment;
    }),
  updateManyAppointment: publicProcedure
    .input(AppointmentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyAppointment = await ctx.prisma.appointment.updateMany(input);
      return updateManyAppointment;
    }),
  updateOneAppointment: publicProcedure
    .input(AppointmentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneAppointment = await ctx.prisma.appointment.update(input);
      return updateOneAppointment;
    }),
  upsertOneAppointment: publicProcedure
    .input(AppointmentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneAppointment = await ctx.prisma.appointment.upsert(input);
      return upsertOneAppointment;
    }),

}) 
