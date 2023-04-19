import { z } from "zod"
import { DoctorUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from "./DoctorUncheckedCreateNestedManyWithoutPatientInput.schema"
import { AppointmentUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from "./AppointmentUncheckedCreateNestedManyWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    age: z.number(),
    phoneNumber: z.number(),
    address: z.string(),
    Doctors: z
      .lazy(
        () => DoctorUncheckedCreateNestedManyWithoutPatientInputObjectSchema
      )
      .optional(),
    Appointment: z
      .lazy(
        () =>
          AppointmentUncheckedCreateNestedManyWithoutPatientInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PatientUncheckedCreateInputObjectSchema = Schema
