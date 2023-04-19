import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    age: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    address: z.literal(true).optional(),
    specialty: z.literal(true).optional(),
    yeasOfExperience: z.literal(true).optional(),
  })
  .strict()

export const DoctorMaxAggregateInputObjectSchema = Schema
