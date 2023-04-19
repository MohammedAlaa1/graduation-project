import { z } from "zod"
import { DoctorCreateNestedOneWithoutAppointmentInputObjectSchema } from "./DoctorCreateNestedOneWithoutAppointmentInput.schema"
import { PatientCreateNestedOneWithoutAppointmentInputObjectSchema } from "./PatientCreateNestedOneWithoutAppointmentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentCreateInput> = z
  .object({
    id: z.string().optional(),
    reasonForVisit: z.string(),
    bookingDate: z.date(),
    appointmentDate: z.date(),
    isCanceled: z.boolean(),
    doctor: z.lazy(
      () => DoctorCreateNestedOneWithoutAppointmentInputObjectSchema
    ),
    patient: z.lazy(
      () => PatientCreateNestedOneWithoutAppointmentInputObjectSchema
    ),
  })
  .strict()

export const AppointmentCreateInputObjectSchema = Schema
