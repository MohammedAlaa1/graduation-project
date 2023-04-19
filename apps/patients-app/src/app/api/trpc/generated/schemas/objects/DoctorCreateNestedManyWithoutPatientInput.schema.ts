import { z } from "zod"
import { DoctorCreateWithoutPatientInputObjectSchema } from "./DoctorCreateWithoutPatientInput.schema"
import { DoctorUncheckedCreateWithoutPatientInputObjectSchema } from "./DoctorUncheckedCreateWithoutPatientInput.schema"
import { DoctorCreateOrConnectWithoutPatientInputObjectSchema } from "./DoctorCreateOrConnectWithoutPatientInput.schema"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorCreateNestedManyWithoutPatientInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DoctorCreateWithoutPatientInputObjectSchema),
        z.lazy(() => DoctorCreateWithoutPatientInputObjectSchema).array(),
        z.lazy(() => DoctorUncheckedCreateWithoutPatientInputObjectSchema),
        z
          .lazy(() => DoctorUncheckedCreateWithoutPatientInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DoctorCreateOrConnectWithoutPatientInputObjectSchema),
        z
          .lazy(() => DoctorCreateOrConnectWithoutPatientInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DoctorWhereUniqueInputObjectSchema),
        z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const DoctorCreateNestedManyWithoutPatientInputObjectSchema = Schema
