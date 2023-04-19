import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientAvgAggregateInputType> = z
  .object({
    age: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
  })
  .strict()

export const PatientAvgAggregateInputObjectSchema = Schema
