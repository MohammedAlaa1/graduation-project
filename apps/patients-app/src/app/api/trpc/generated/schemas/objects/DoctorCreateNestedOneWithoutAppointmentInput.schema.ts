import { z } from "zod"
import { DoctorCreateWithoutAppointmentInputObjectSchema } from "./DoctorCreateWithoutAppointmentInput.schema"
import { DoctorUncheckedCreateWithoutAppointmentInputObjectSchema } from "./DoctorUncheckedCreateWithoutAppointmentInput.schema"
import { DoctorCreateOrConnectWithoutAppointmentInputObjectSchema } from "./DoctorCreateOrConnectWithoutAppointmentInput.schema"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutAppointmentInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DoctorCreateWithoutAppointmentInputObjectSchema),
        z.lazy(() => DoctorUncheckedCreateWithoutAppointmentInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DoctorCreateOrConnectWithoutAppointmentInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const DoctorCreateNestedOneWithoutAppointmentInputObjectSchema = Schema
