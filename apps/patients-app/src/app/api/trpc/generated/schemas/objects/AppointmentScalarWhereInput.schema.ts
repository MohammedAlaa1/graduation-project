import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AppointmentScalarWhereInputObjectSchema),
        z.lazy(() => AppointmentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AppointmentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AppointmentScalarWhereInputObjectSchema),
        z.lazy(() => AppointmentScalarWhereInputObjectSchema).array(),
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
  })
  .strict()

export const AppointmentScalarWhereInputObjectSchema = Schema
