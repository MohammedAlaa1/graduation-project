import { z } from "zod"
import { PatientScalarWhereInputObjectSchema } from "./PatientScalarWhereInput.schema"
import { PatientUpdateManyMutationInputObjectSchema } from "./PatientUpdateManyMutationInput.schema"
import { PatientUncheckedUpdateManyWithoutPatientInputObjectSchema } from "./PatientUncheckedUpdateManyWithoutPatientInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PatientUpdateManyWithWhereWithoutDoctorsInput> =
  z
    .object({
      where: z.lazy(() => PatientScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PatientUpdateManyMutationInputObjectSchema),
        z.lazy(() => PatientUncheckedUpdateManyWithoutPatientInputObjectSchema),
      ]),
    })
    .strict()

export const PatientUpdateManyWithWhereWithoutDoctorsInputObjectSchema = Schema
