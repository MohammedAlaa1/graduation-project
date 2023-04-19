import { z } from "zod"
import { PatientWhereUniqueInputObjectSchema } from "./PatientWhereUniqueInput.schema"
import { PatientCreateWithoutDoctorsInputObjectSchema } from "./PatientCreateWithoutDoctorsInput.schema"
import { PatientUncheckedCreateWithoutDoctorsInputObjectSchema } from "./PatientUncheckedCreateWithoutDoctorsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutDoctorsInput> = z
  .object({
    where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PatientCreateWithoutDoctorsInputObjectSchema),
      z.lazy(() => PatientUncheckedCreateWithoutDoctorsInputObjectSchema),
    ]),
  })
  .strict()

export const PatientCreateOrConnectWithoutDoctorsInputObjectSchema = Schema
