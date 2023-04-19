import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { PatientListRelationFilterObjectSchema } from "./PatientListRelationFilter.schema"
import { AppointmentListRelationFilterObjectSchema } from "./AppointmentListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DoctorWhereInputObjectSchema),
        z.lazy(() => DoctorWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DoctorWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DoctorWhereInputObjectSchema),
        z.lazy(() => DoctorWhereInputObjectSchema).array(),
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
    specialty: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    yeasOfExperience: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Patient: z.lazy(() => PatientListRelationFilterObjectSchema).optional(),
    Appointment: z
      .lazy(() => AppointmentListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const DoctorWhereInputObjectSchema = Schema
