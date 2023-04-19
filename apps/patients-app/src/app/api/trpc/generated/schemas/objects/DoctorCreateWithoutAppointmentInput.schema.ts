import { z } from "zod"
import { PatientCreateNestedManyWithoutDoctorsInputObjectSchema } from "./PatientCreateNestedManyWithoutDoctorsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorCreateWithoutAppointmentInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    age: z.number(),
    phoneNumber: z.number(),
    address: z.string(),
    specialty: z.string(),
    yeasOfExperience: z.number(),
    Patient: z
      .lazy(() => PatientCreateNestedManyWithoutDoctorsInputObjectSchema)
      .optional(),
  })
  .strict()

export const DoctorCreateWithoutAppointmentInputObjectSchema = Schema
