import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorSumOrderByAggregateInput> = z
  .object({
    age: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    yeasOfExperience: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DoctorSumOrderByAggregateInputObjectSchema = Schema
