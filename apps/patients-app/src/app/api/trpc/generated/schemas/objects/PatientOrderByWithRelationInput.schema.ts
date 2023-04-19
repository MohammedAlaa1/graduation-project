import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { DoctorOrderByRelationAggregateInputObjectSchema } from "./DoctorOrderByRelationAggregateInput.schema"
import { AppointmentOrderByRelationAggregateInputObjectSchema } from "./AppointmentOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    Doctors: z
      .lazy(() => DoctorOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Appointment: z
      .lazy(() => AppointmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const PatientOrderByWithRelationInputObjectSchema = Schema
