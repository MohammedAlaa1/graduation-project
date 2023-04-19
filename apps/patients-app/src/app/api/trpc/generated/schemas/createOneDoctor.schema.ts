import { z } from "zod"
import { DoctorCreateInputObjectSchema } from "./objects/DoctorCreateInput.schema"
import { DoctorUncheckedCreateInputObjectSchema } from "./objects/DoctorUncheckedCreateInput.schema"

export const DoctorCreateOneSchema = z.object({
  data: z.union([
    DoctorCreateInputObjectSchema,
    DoctorUncheckedCreateInputObjectSchema,
  ]),
})
