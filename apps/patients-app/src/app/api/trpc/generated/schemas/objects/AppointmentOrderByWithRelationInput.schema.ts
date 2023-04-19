import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { DoctorOrderByWithRelationInputObjectSchema } from "./DoctorOrderByWithRelationInput.schema"
import { PatientOrderByWithRelationInputObjectSchema } from "./PatientOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    reasonForVisit: z.lazy(() => SortOrderSchema).optional(),
    bookingDate: z.lazy(() => SortOrderSchema).optional(),
    appointmentDate: z.lazy(() => SortOrderSchema).optional(),
    isCanceled: z.lazy(() => SortOrderSchema).optional(),
    doctorId: z.lazy(() => SortOrderSchema).optional(),
    patientId: z.lazy(() => SortOrderSchema).optional(),
    doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
    patient: z
      .lazy(() => PatientOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const AppointmentOrderByWithRelationInputObjectSchema = Schema
