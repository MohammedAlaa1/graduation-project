import { z } from "zod"
import { PatientCreateNestedManyWithoutDoctorsInputObjectSchema } from "./PatientCreateNestedManyWithoutDoctorsInput.schema"
import { AppointmentCreateNestedManyWithoutDoctorInputObjectSchema } from "./AppointmentCreateNestedManyWithoutDoctorInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorCreateInput> = z
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
    Appointment: z
      .lazy(() => AppointmentCreateNestedManyWithoutDoctorInputObjectSchema)
      .optional(),
  })
  .strict()

export const DoctorCreateInputObjectSchema = Schema
