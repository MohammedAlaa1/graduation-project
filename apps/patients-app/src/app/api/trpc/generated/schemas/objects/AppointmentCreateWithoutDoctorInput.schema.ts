import { z } from "zod"
import { PatientCreateNestedOneWithoutAppointmentInputObjectSchema } from "./PatientCreateNestedOneWithoutAppointmentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentCreateWithoutDoctorInput> = z
  .object({
    id: z.string().optional(),
    reasonForVisit: z.string(),
    bookingDate: z.date(),
    appointmentDate: z.date(),
    isCanceled: z.boolean(),
    patient: z.lazy(
      () => PatientCreateNestedOneWithoutAppointmentInputObjectSchema
    ),
  })
  .strict()

export const AppointmentCreateWithoutDoctorInputObjectSchema = Schema
