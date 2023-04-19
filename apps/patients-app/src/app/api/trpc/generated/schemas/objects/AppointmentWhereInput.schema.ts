import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DoctorRelationFilterObjectSchema } from "./DoctorRelationFilter.schema"
import { DoctorWhereInputObjectSchema } from "./DoctorWhereInput.schema"
import { PatientRelationFilterObjectSchema } from "./PatientRelationFilter.schema"
import { PatientWhereInputObjectSchema } from "./PatientWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AppointmentWhereInputObjectSchema),
        z.lazy(() => AppointmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AppointmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AppointmentWhereInputObjectSchema),
        z.lazy(() => AppointmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reasonForVisit: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    bookingDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    appointmentDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    isCanceled: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    doctorId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    patientId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    doctor: z
      .union([
        z.lazy(() => DoctorRelationFilterObjectSchema),
        z.lazy(() => DoctorWhereInputObjectSchema),
      ])
      .optional(),
    patient: z
      .union([
        z.lazy(() => PatientRelationFilterObjectSchema),
        z.lazy(() => PatientWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AppointmentWhereInputObjectSchema = Schema
