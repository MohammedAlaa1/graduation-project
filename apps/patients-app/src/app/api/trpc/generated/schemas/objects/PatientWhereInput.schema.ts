import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { DoctorListRelationFilterObjectSchema } from "./DoctorListRelationFilter.schema"
import { AppointmentListRelationFilterObjectSchema } from "./AppointmentListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientWhereInputObjectSchema),
        z.lazy(() => PatientWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientWhereInputObjectSchema),
        z.lazy(() => PatientWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    age: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    phoneNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Doctors: z.lazy(() => DoctorListRelationFilterObjectSchema).optional(),
    Appointment: z
      .lazy(() => AppointmentListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const PatientWhereInputObjectSchema = Schema
