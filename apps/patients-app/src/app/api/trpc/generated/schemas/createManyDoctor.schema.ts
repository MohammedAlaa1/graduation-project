import { z } from "zod"
import { DoctorCreateManyInputObjectSchema } from "./objects/DoctorCreateManyInput.schema"

export const DoctorCreateManySchema = z.object({
  data: z.union([
    DoctorCreateManyInputObjectSchema,
    z.array(DoctorCreateManyInputObjectSchema),
  ]),
})
