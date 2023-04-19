import { z } from "zod"
import { DoctorCreateWithoutAppointmentInputObjectSchema } from "./DoctorCreateWithoutAppointmentInput.schema"
import { DoctorUncheckedCreateWithoutAppointmentInputObjectSchema } from "./DoctorUncheckedCreateWithoutAppointmentInput.schema"
import { DoctorCreateOrConnectWithoutAppointmentInputObjectSchema } from "./DoctorCreateOrConnectWithoutAppointmentInput.schema"
import { DoctorUpsertWithoutAppointmentInputObjectSchema } from "./DoctorUpsertWithoutAppointmentInput.schema"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"
import { DoctorUpdateWithoutAppointmentInputObjectSchema } from "./DoctorUpdateWithoutAppointmentInput.schema"
import { DoctorUncheckedUpdateWithoutAppointmentInputObjectSchema } from "./DoctorUncheckedUpdateWithoutAppointmentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutAppointmentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DoctorCreateWithoutAppointmentInputObjectSchema),
          z.lazy(
            () => DoctorUncheckedCreateWithoutAppointmentInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DoctorCreateOrConnectWithoutAppointmentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DoctorUpsertWithoutAppointmentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DoctorUpdateWithoutAppointmentInputObjectSchema),
          z.lazy(
            () => DoctorUncheckedUpdateWithoutAppointmentInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const DoctorUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema =
  Schema
