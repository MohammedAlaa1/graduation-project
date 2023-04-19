import { z } from "zod"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"
import { DoctorCreateWithoutPatientInputObjectSchema } from "./DoctorCreateWithoutPatientInput.schema"
import { DoctorUncheckedCreateWithoutPatientInputObjectSchema } from "./DoctorUncheckedCreateWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutPatientInput> = z
  .object({
    where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DoctorCreateWithoutPatientInputObjectSchema),
      z.lazy(() => DoctorUncheckedCreateWithoutPatientInputObjectSchema),
    ]),
  })
  .strict()

export const DoctorCreateOrConnectWithoutPatientInputObjectSchema = Schema
