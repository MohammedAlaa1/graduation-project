import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    reasonForVisit: z.literal(true).optional(),
    bookingDate: z.literal(true).optional(),
    appointmentDate: z.literal(true).optional(),
    isCanceled: z.literal(true).optional(),
    doctorId: z.literal(true).optional(),
    patientId: z.literal(true).optional(),
  })
  .strict()

export const AppointmentMinAggregateInputObjectSchema = Schema
