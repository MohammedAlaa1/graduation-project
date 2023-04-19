import { z } from "zod"
import { DoctorOrderByWithRelationInputObjectSchema } from "./objects/DoctorOrderByWithRelationInput.schema"
import { DoctorWhereInputObjectSchema } from "./objects/DoctorWhereInput.schema"
import { DoctorWhereUniqueInputObjectSchema } from "./objects/DoctorWhereUniqueInput.schema"
import { DoctorScalarFieldEnumSchema } from "./enums/DoctorScalarFieldEnum.schema"

export const DoctorFindFirstSchema = z.object({
  orderBy: z
    .union([
      DoctorOrderByWithRelationInputObjectSchema,
      DoctorOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DoctorWhereInputObjectSchema.optional(),
  cursor: DoctorWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DoctorScalarFieldEnumSchema).optional(),
})
