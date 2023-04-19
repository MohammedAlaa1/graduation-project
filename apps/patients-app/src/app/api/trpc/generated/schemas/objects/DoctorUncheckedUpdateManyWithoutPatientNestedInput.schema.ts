import { z } from "zod"
import { DoctorCreateWithoutPatientInputObjectSchema } from "./DoctorCreateWithoutPatientInput.schema"
import { DoctorUncheckedCreateWithoutPatientInputObjectSchema } from "./DoctorUncheckedCreateWithoutPatientInput.schema"
import { DoctorCreateOrConnectWithoutPatientInputObjectSchema } from "./DoctorCreateOrConnectWithoutPatientInput.schema"
import { DoctorUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from "./DoctorUpsertWithWhereUniqueWithoutPatientInput.schema"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"
import { DoctorUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from "./DoctorUpdateWithWhereUniqueWithoutPatientInput.schema"
import { DoctorUpdateManyWithWhereWithoutPatientInputObjectSchema } from "./DoctorUpdateManyWithWhereWithoutPatientInput.schema"
import { DoctorScalarWhereInputObjectSchema } from "./DoctorScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUncheckedUpdateManyWithoutPatientNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => DoctorUpsertWithWhereUniqueWithoutPatientInputObjectSchema
          ),
          z
            .lazy(
              () => DoctorUpsertWithWhereUniqueWithoutPatientInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => DoctorWhereUniqueInputObjectSchema),
          z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DoctorWhereUniqueInputObjectSchema),
          z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DoctorWhereUniqueInputObjectSchema),
          z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DoctorWhereUniqueInputObjectSchema),
          z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => DoctorUpdateWithWhereUniqueWithoutPatientInputObjectSchema
          ),
          z
            .lazy(
              () => DoctorUpdateWithWhereUniqueWithoutPatientInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DoctorUpdateManyWithWhereWithoutPatientInputObjectSchema
          ),
          z
            .lazy(
              () => DoctorUpdateManyWithWhereWithoutPatientInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DoctorScalarWhereInputObjectSchema),
          z.lazy(() => DoctorScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DoctorUncheckedUpdateManyWithoutPatientNestedInputObjectSchema =
  Schema
