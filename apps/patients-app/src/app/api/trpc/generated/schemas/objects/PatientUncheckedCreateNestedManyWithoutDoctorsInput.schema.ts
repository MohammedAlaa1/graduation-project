import { z } from "zod"
import { PatientCreateWithoutDoctorsInputObjectSchema } from "./PatientCreateWithoutDoctorsInput.schema"
import { PatientUncheckedCreateWithoutDoctorsInputObjectSchema } from "./PatientUncheckedCreateWithoutDoctorsInput.schema"
import { PatientCreateOrConnectWithoutDoctorsInputObjectSchema } from "./PatientCreateOrConnectWithoutDoctorsInput.schema"
import { PatientWhereUniqueInputObjectSchema } from "./PatientWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUncheckedCreateNestedManyWithoutDoctorsInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => PatientWhereUniqueInputObjectSchema),
          z.lazy(() => PatientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PatientUncheckedCreateNestedManyWithoutDoctorsInputObjectSchema =
  Schema
