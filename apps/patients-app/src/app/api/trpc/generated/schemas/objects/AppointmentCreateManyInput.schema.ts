import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentCreateManyInput> = z
  .object({
    id: z.string().optional(),
    reasonForVisit: z.string(),
    bookingDate: z.date(),
    appointmentDate: z.date(),
    isCanceled: z.boolean(),
    doctorId: z.string(),
    patientId: z.string(),
  })
  .strict()

export const AppointmentCreateManyInputObjectSchema = Schema
