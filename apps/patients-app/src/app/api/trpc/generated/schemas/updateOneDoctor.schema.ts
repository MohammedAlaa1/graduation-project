import { z } from "zod"
import { DoctorUpdateInputObjectSchema } from "./objects/DoctorUpdateInput.schema"
import { DoctorUncheckedUpdateInputObjectSchema } from "./objects/DoctorUncheckedUpdateInput.schema"
import { DoctorWhereUniqueInputObjectSchema } from "./objects/DoctorWhereUniqueInput.schema"

export const DoctorUpdateOneSchema = z.object({
  data: z.union([
    DoctorUpdateInputObjectSchema,
    DoctorUncheckedUpdateInputObjectSchema,
  ]),
  where: DoctorWhereUniqueInputObjectSchema,
})
