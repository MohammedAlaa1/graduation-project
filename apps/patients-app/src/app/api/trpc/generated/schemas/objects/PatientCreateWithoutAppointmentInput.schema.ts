import { z } from "zod"
import { DoctorCreateNestedManyWithoutPatientInputObjectSchema } from "./DoctorCreateNestedManyWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientCreateWithoutAppointmentInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    age: z.number(),
    phoneNumber: z.number(),
    address: z.string(),
    Doctors: z
      .lazy(() => DoctorCreateNestedManyWithoutPatientInputObjectSchema)
      .optional(),
  })
  .strict()

export const PatientCreateWithoutAppointmentInputObjectSchema = Schema
