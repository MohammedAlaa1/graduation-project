import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { DoctorUpdateManyWithoutPatientNestedInputObjectSchema } from "./DoctorUpdateManyWithoutPatientNestedInput.schema"
import { AppointmentUpdateManyWithoutPatientNestedInputObjectSchema } from "./AppointmentUpdateManyWithoutPatientNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUpdateInput> = z
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
      .lazy(() => DoctorUpdateManyWithoutPatientNestedInputObjectSchema)
      .optional(),
    Appointment: z
      .lazy(() => AppointmentUpdateManyWithoutPatientNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const PatientUpdateInputObjectSchema = Schema
