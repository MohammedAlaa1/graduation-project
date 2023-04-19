import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { DoctorUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from "./DoctorUncheckedUpdateManyWithoutPatientNestedInput.schema"
import { AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from "./AppointmentUncheckedUpdateManyWithoutPatientNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    age: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    phoneNumber: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    address: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Doctors: z
      .lazy(
        () => DoctorUncheckedUpdateManyWithoutPatientNestedInputObjectSchema
      )
      .optional(),
    Appointment: z
      .lazy(
        () =>
          AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PatientUncheckedUpdateInputObjectSchema = Schema
