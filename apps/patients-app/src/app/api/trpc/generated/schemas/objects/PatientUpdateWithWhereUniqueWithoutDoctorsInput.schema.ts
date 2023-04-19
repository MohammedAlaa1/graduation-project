import { z } from "zod"
import { PatientWhereUniqueInputObjectSchema } from "./PatientWhereUniqueInput.schema"
import { PatientUpdateWithoutDoctorsInputObjectSchema } from "./PatientUpdateWithoutDoctorsInput.schema"
import { PatientUncheckedUpdateWithoutDoctorsInputObjectSchema } from "./PatientUncheckedUpdateWithoutDoctorsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUpdateWithWhereUniqueWithoutDoctorsInput> =
  z
    .object({
      where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientUpdateWithoutDoctorsInputObjectSchema),
        z.lazy(() => PatientUncheckedUpdateWithoutDoctorsInputObjectSchema),
      ]),
    })
    .strict()

export const PatientUpdateWithWhereUniqueWithoutDoctorsInputObjectSchema =
  Schema
