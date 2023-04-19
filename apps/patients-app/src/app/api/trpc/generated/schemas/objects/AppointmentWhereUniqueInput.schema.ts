import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    appointmentDate: z.date().optional(),
  })
  .strict()

export const AppointmentWhereUniqueInputObjectSchema = Schema
