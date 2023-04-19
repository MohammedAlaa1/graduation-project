import { z } from "zod"
import { DoctorWhereUniqueInputObjectSchema } from "./DoctorWhereUniqueInput.schema"
import { DoctorUpdateWithoutPatientInputObjectSchema } from "./DoctorUpdateWithoutPatientInput.schema"
import { DoctorUncheckedUpdateWithoutPatientInputObjectSchema } from "./DoctorUncheckedUpdateWithoutPatientInput.schema"
import { DoctorCreateWithoutPatientInputObjectSchema } from "./DoctorCreateWithoutPatientInput.schema"
import { DoctorUncheckedCreateWithoutPatientInputObjectSchema } from "./DoctorUncheckedCreateWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutPatientInput> =
  z
    .object({
      where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DoctorUpdateWithoutPatientInputObjectSchema),
        z.lazy(() => DoctorUncheckedUpdateWithoutPatientInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DoctorCreateWithoutPatientInputObjectSchema),
        z.lazy(() => DoctorUncheckedCreateWithoutPatientInputObjectSchema),
      ]),
    })
    .strict()

export const DoctorUpsertWithWhereUniqueWithoutPatientInputObjectSchema = Schema
