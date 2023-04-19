import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional(),
    phoneNumber: z.number().optional(),
  })
  .strict()

export const DoctorWhereUniqueInputObjectSchema = Schema
