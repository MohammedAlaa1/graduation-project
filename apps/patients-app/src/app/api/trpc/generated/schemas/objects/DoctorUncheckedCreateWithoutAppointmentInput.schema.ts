import { z } from "zod"
import { PatientUncheckedCreateNestedManyWithoutDoctorsInputObjectSchema } from "./PatientUncheckedCreateNestedManyWithoutDoctorsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutAppointmentInput> = z
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
      .lazy(
        () => PatientUncheckedCreateNestedManyWithoutDoctorsInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DoctorUncheckedCreateWithoutAppointmentInputObjectSchema = Schema
