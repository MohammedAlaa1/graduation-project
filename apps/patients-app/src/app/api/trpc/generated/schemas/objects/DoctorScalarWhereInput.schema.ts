import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DoctorScalarWhereInputObjectSchema),
        z.lazy(() => DoctorScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DoctorScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DoctorScalarWhereInputObjectSchema),
        z.lazy(() => DoctorScalarWhereInputObjectSchema).array(),
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
  })
  .strict()

export const DoctorScalarWhereInputObjectSchema = Schema
