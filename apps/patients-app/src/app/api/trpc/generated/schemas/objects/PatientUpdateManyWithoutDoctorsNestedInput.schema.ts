import { z } from "zod"
import { PatientCreateWithoutDoctorsInputObjectSchema } from "./PatientCreateWithoutDoctorsInput.schema"
import { PatientUncheckedCreateWithoutDoctorsInputObjectSchema } from "./PatientUncheckedCreateWithoutDoctorsInput.schema"
import { PatientCreateOrConnectWithoutDoctorsInputObjectSchema } from "./PatientCreateOrConnectWithoutDoctorsInput.schema"
import { PatientUpsertWithWhereUniqueWithoutDoctorsInputObjectSchema } from "./PatientUpsertWithWhereUniqueWithoutDoctorsInput.schema"
import { PatientWhereUniqueInputObjectSchema } from "./PatientWhereUniqueInput.schema"
import { PatientUpdateWithWhereUniqueWithoutDoctorsInputObjectSchema } from "./PatientUpdateWithWhereUniqueWithoutDoctorsInput.schema"
import { PatientUpdateManyWithWhereWithoutDoctorsInputObjectSchema } from "./PatientUpdateManyWithWhereWithoutDoctorsInput.schema"
import { PatientScalarWhereInputObjectSchema } from "./PatientScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUpdateManyWithoutDoctorsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PatientCreateWithoutDoctorsInputObjectSchema),
        z.lazy(() => PatientCreateWithoutDoctorsInputObjectSchema).array(),
        z.lazy(() => PatientUncheckedCreateWithoutDoctorsInputObjectSchema),
        z
          .lazy(() => PatientUncheckedCreateWithoutDoctorsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PatientCreateOrConnectWithoutDoctorsInputObjectSchema),
        z
          .lazy(() => PatientCreateOrConnectWithoutDoctorsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PatientUpsertWithWhereUniqueWithoutDoctorsInputObjectSchema
        ),
        z
          .lazy(
            () => PatientUpsertWithWhereUniqueWithoutDoctorsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => PatientWhereUniqueInputObjectSchema),
        z.lazy(() => PatientWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PatientWhereUniqueInputObjectSchema),
        z.lazy(() => PatientWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PatientWhereUniqueInputObjectSchema),
        z.lazy(() => PatientWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PatientWhereUniqueInputObjectSchema),
        z.lazy(() => PatientWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PatientUpdateWithWhereUniqueWithoutDoctorsInputObjectSchema
        ),
        z
          .lazy(
            () => PatientUpdateWithWhereUniqueWithoutDoctorsInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PatientUpdateManyWithWhereWithoutDoctorsInputObjectSchema),
        z
          .lazy(() => PatientUpdateManyWithWhereWithoutDoctorsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PatientScalarWhereInputObjectSchema),
        z.lazy(() => PatientScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PatientUpdateManyWithoutDoctorsNestedInputObjectSchema = Schema
