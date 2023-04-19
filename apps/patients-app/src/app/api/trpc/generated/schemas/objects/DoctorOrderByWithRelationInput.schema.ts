import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PatientOrderByRelationAggregateInputObjectSchema } from "./PatientOrderByRelationAggregateInput.schema"
import { AppointmentOrderByRelationAggregateInputObjectSchema } from "./AppointmentOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    specialty: z.lazy(() => SortOrderSchema).optional(),
    yeasOfExperience: z.lazy(() => SortOrderSchema).optional(),
    Patient: z
      .lazy(() => PatientOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Appointment: z
      .lazy(() => AppointmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const DoctorOrderByWithRelationInputObjectSchema = Schema
