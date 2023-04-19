import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { DoctorCountOrderByAggregateInputObjectSchema } from "./DoctorCountOrderByAggregateInput.schema"
import { DoctorAvgOrderByAggregateInputObjectSchema } from "./DoctorAvgOrderByAggregateInput.schema"
import { DoctorMaxOrderByAggregateInputObjectSchema } from "./DoctorMaxOrderByAggregateInput.schema"
import { DoctorMinOrderByAggregateInputObjectSchema } from "./DoctorMinOrderByAggregateInput.schema"
import { DoctorSumOrderByAggregateInputObjectSchema } from "./DoctorSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    specialty: z.lazy(() => SortOrderSchema).optional(),
    yeasOfExperience: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DoctorCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => DoctorAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DoctorMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DoctorMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DoctorSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DoctorOrderByWithAggregationInputObjectSchema = Schema
