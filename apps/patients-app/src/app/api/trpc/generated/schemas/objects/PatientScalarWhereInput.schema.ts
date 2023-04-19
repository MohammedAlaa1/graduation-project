import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientScalarWhereInputObjectSchema),
        z.lazy(() => PatientScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientScalarWhereInputObjectSchema),
        z.lazy(() => PatientScalarWhereInputObjectSchema).array(),
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
  })
  .strict()

export const PatientScalarWhereInputObjectSchema = Schema
