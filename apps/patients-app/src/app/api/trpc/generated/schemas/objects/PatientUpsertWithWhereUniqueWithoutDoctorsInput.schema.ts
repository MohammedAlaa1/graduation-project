import { z } from "zod"
import { PatientWhereUniqueInputObjectSchema } from "./PatientWhereUniqueInput.schema"
import { PatientUpdateWithoutDoctorsInputObjectSchema } from "./PatientUpdateWithoutDoctorsInput.schema"
import { PatientUncheckedUpdateWithoutDoctorsInputObjectSchema } from "./PatientUncheckedUpdateWithoutDoctorsInput.schema"
import { PatientCreateWithoutDoctorsInputObjectSchema } from "./PatientCreateWithoutDoctorsInput.schema"
import { PatientUncheckedCreateWithoutDoctorsInputObjectSchema } from "./PatientUncheckedCreateWithoutDoctorsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUpsertWithWhereUniqueWithoutDoctorsInput> =
  z
    .object({
      where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PatientUpdateWithoutDoctorsInputObjectSchema),
        z.lazy(() => PatientUncheckedUpdateWithoutDoctorsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PatientCreateWithoutDoctorsInputObjectSchema),
        z.lazy(() => PatientUncheckedCreateWithoutDoctorsInputObjectSchema),
      ]),
    })
    .strict()

export const PatientUpsertWithWhereUniqueWithoutDoctorsInputObjectSchema =
  Schema
