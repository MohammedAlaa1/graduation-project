import { z } from "zod"
import { AppointmentUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from "./AppointmentUncheckedCreateNestedManyWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUncheckedCreateWithoutDoctorsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    age: z.number(),
    phoneNumber: z.number(),
    address: z.string(),
    Appointment: z
      .lazy(
        () =>
          AppointmentUncheckedCreateNestedManyWithoutPatientInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PatientUncheckedCreateWithoutDoctorsInputObjectSchema = Schema
