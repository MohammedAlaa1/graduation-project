import { z } from "zod"
import { AppointmentCreateNestedManyWithoutPatientInputObjectSchema } from "./AppointmentCreateNestedManyWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientCreateWithoutDoctorsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    age: z.number(),
    phoneNumber: z.number(),
    address: z.string(),
    Appointment: z
      .lazy(() => AppointmentCreateNestedManyWithoutPatientInputObjectSchema)
      .optional(),
  })
  .strict()

export const PatientCreateWithoutDoctorsInputObjectSchema = Schema
