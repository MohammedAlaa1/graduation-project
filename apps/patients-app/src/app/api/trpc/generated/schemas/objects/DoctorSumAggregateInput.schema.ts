import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorSumAggregateInputType> = z
  .object({
    age: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    yeasOfExperience: z.literal(true).optional(),
  })
  .strict()

export const DoctorSumAggregateInputObjectSchema = Schema
