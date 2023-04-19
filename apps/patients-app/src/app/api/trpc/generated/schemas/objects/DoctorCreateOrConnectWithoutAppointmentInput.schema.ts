import { z } from "zod"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"
import { DoctorCreateWithoutAppointmentInputObjectSchema } from "./DoctorCreateWithoutAppointmentInput.schema"
import { DoctorUncheckedCreateWithoutAppointmentInputObjectSchema } from "./DoctorUncheckedCreateWithoutAppointmentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutAppointmentInput> = z
  .object({
    where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DoctorCreateWithoutAppointmentInputObjectSchema),
      z.lazy(() => DoctorUncheckedCreateWithoutAppointmentInputObjectSchema),
    ]),
  })
  .strict()

export const DoctorCreateOrConnectWithoutAppointmentInputObjectSchema = Schema
