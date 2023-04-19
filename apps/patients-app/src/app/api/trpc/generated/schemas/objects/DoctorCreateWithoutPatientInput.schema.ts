import { z } from "zod"
import { AppointmentCreateNestedManyWithoutDoctorInputObjectSchema } from "./AppointmentCreateNestedManyWithoutDoctorInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorCreateWithoutPatientInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    age: z.number(),
    phoneNumber: z.number(),
    address: z.string(),
    specialty: z.string(),
    yeasOfExperience: z.number(),
    Appointment: z
      .lazy(() => AppointmentCreateNestedManyWithoutDoctorInputObjectSchema)
      .optional(),
  })
  .strict()

export const DoctorCreateWithoutPatientInputObjectSchema = Schema
