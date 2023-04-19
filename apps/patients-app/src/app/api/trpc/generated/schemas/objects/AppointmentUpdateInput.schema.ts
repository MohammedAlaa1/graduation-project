import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DoctorUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema } from "./DoctorUpdateOneRequiredWithoutAppointmentNestedInput.schema"
import { PatientUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema } from "./PatientUpdateOneRequiredWithoutAppointmentNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AppointmentUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    reasonForVisit: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    bookingDate: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    appointmentDate: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isCanceled: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    doctor: z
      .lazy(
        () => DoctorUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema
      )
      .optional(),
    patient: z
      .lazy(
        () => PatientUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AppointmentUpdateInputObjectSchema = Schema
