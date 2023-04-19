import { z } from "zod"
import { AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from "./AppointmentUncheckedCreateNestedManyWithoutDoctorInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutPatientInput> = z
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
      .lazy(
        () => AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DoctorUncheckedCreateWithoutPatientInputObjectSchema = Schema
