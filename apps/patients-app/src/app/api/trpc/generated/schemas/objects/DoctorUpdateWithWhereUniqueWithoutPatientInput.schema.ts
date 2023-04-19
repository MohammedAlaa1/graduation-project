import { z } from "zod"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"
import { DoctorUpdateWithoutPatientInputObjectSchema } from "./DoctorUpdateWithoutPatientInput.schema"
import { DoctorUncheckedUpdateWithoutPatientInputObjectSchema } from "./DoctorUncheckedUpdateWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUpdateWithWhereUniqueWithoutPatientInput> =
  z
    .object({
      where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DoctorUpdateWithoutPatientInputObjectSchema),
        z.lazy(() => DoctorUncheckedUpdateWithoutPatientInputObjectSchema),
      ]),
    })
    .strict()

export const DoctorUpdateWithWhereUniqueWithoutPatientInputObjectSchema = Schema
