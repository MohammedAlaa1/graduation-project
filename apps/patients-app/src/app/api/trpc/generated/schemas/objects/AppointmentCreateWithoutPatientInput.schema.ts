import { z } from "zod"
import { DoctorCreateNestedOneWithoutAppointmentInputObjectSchema } from "./DoctorCreateNestedOneWithoutAppointmentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentCreateWithoutPatientInput> = z
  .object({
    id: z.string().optional(),
    reasonForVisit: z.string(),
    bookingDate: z.date(),
    appointmentDate: z.date(),
    isCanceled: z.boolean(),
    doctor: z.lazy(
      () => DoctorCreateNestedOneWithoutAppointmentInputObjectSchema
    ),
  })
  .strict()

export const AppointmentCreateWithoutPatientInputObjectSchema = Schema
