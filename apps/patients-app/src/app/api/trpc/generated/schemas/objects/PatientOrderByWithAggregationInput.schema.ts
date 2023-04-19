import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PatientCountOrderByAggregateInputObjectSchema } from "./PatientCountOrderByAggregateInput.schema"
import { PatientAvgOrderByAggregateInputObjectSchema } from "./PatientAvgOrderByAggregateInput.schema"
import { PatientMaxOrderByAggregateInputObjectSchema } from "./PatientMaxOrderByAggregateInput.schema"
import { PatientMinOrderByAggregateInputObjectSchema } from "./PatientMinOrderByAggregateInput.schema"
import { PatientSumOrderByAggregateInputObjectSchema } from "./PatientSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PatientCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PatientAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PatientMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PatientMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PatientSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PatientOrderByWithAggregationInputObjectSchema = Schema
