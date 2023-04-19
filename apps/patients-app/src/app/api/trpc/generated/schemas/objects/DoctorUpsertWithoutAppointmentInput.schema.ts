import { z } from "zod"
import { DoctorUpdateWithoutAppointmentInputObjectSchema } from "./DoctorUpdateWithoutAppointmentInput.schema"
import { DoctorUncheckedUpdateWithoutAppointmentInputObjectSchema } from "./DoctorUncheckedUpdateWithoutAppointmentInput.schema"
import { DoctorCreateWithoutAppointmentInputObjectSchema } from "./DoctorCreateWithoutAppointmentInput.schema"
import { DoctorUncheckedCreateWithoutAppointmentInputObjectSchema } from "./DoctorUncheckedCreateWithoutAppointmentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutAppointmentInput> = z
  .object({
    update: z.union([
      z.lazy(() => DoctorUpdateWithoutAppointmentInputObjectSchema),
      z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DoctorCreateWithoutAppointmentInputObjectSchema),
      z.lazy(() => DoctorUncheckedCreateWithoutAppointmentInputObjectSchema),
    ]),
  })
  .strict()

export const DoctorUpsertWithoutAppointmentInputObjectSchema = Schema
