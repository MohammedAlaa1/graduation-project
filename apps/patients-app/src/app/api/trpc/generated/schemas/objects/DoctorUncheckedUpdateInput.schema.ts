import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { PatientUncheckedUpdateManyWithoutDoctorsNestedInputObjectSchema } from "./PatientUncheckedUpdateManyWithoutDoctorsNestedInput.schema"
import { AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from "./AppointmentUncheckedUpdateManyWithoutDoctorNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUncheckedUpdateInput> = z
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
    specialty: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    yeasOfExperience: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Patient: z
      .lazy(
        () => PatientUncheckedUpdateManyWithoutDoctorsNestedInputObjectSchema
      )
      .optional(),
    Appointment: z
      .lazy(
        () => AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DoctorUncheckedUpdateInputObjectSchema = Schema
