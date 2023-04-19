import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { AppointmentCountOrderByAggregateInputObjectSchema } from "./AppointmentCountOrderByAggregateInput.schema"
import { AppointmentMaxOrderByAggregateInputObjectSchema } from "./AppointmentMaxOrderByAggregateInput.schema"
import { AppointmentMinOrderByAggregateInputObjectSchema } from "./AppointmentMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    reasonForVisit: z.lazy(() => SortOrderSchema).optional(),
    bookingDate: z.lazy(() => SortOrderSchema).optional(),
    appointmentDate: z.lazy(() => SortOrderSchema).optional(),
    isCanceled: z.lazy(() => SortOrderSchema).optional(),
    doctorId: z.lazy(() => SortOrderSchema).optional(),
    patientId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AppointmentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AppointmentMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AppointmentMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const AppointmentOrderByWithAggregationInputObjectSchema = Schema
