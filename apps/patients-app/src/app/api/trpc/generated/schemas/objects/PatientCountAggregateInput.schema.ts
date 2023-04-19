import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    age: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    address: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PatientCountAggregateInputObjectSchema = Schema
