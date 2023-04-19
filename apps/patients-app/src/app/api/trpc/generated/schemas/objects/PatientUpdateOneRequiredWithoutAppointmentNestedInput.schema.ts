import { z } from "zod"
import { PatientCreateWithoutAppointmentInputObjectSchema } from "./PatientCreateWithoutAppointmentInput.schema"
import { PatientUncheckedCreateWithoutAppointmentInputObjectSchema } from "./PatientUncheckedCreateWithoutAppointmentInput.schema"
import { PatientCreateOrConnectWithoutAppointmentInputObjectSchema } from "./PatientCreateOrConnectWithoutAppointmentInput.schema"
import { PatientUpsertWithoutAppointmentInputObjectSchema } from "./PatientUpsertWithoutAppointmentInput.schema"
import { PatientWhereUniqueInputObjectSchema } from "./PatientWhereUniqueInput.schema"
import { PatientUpdateWithoutAppointmentInputObjectSchema } from "./PatientUpdateWithoutAppointmentInput.schema"
import { PatientUncheckedUpdateWithoutAppointmentInputObjectSchema } from "./PatientUncheckedUpdateWithoutAppointmentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutAppointmentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PatientCreateWithoutAppointmentInputObjectSchema),
          z.lazy(
            () => PatientUncheckedCreateWithoutAppointmentInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PatientCreateOrConnectWithoutAppointmentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PatientUpsertWithoutAppointmentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PatientUpdateWithoutAppointmentInputObjectSchema),
          z.lazy(
            () => PatientUncheckedUpdateWithoutAppointmentInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const PatientUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema =
  Schema
