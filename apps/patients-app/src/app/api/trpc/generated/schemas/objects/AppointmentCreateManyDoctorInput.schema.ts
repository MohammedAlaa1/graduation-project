import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentCreateManyDoctorInput> = z
  .object({
    id: z.string().optional(),
    reasonForVisit: z.string(),
    bookingDate: z.date(),
    appointmentDate: z.date(),
    isCanceled: z.boolean(),
    patientId: z.string(),
  })
  .strict()

export const AppointmentCreateManyDoctorInputObjectSchema = Schema
