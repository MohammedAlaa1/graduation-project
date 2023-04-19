import { z } from "zod"
import { DoctorOrderByWithRelationInputObjectSchema } from "./objects/DoctorOrderByWithRelationInput.schema"
import { DoctorWhereInputObjectSchema } from "./objects/DoctorWhereInput.schema"
import { DoctorWhereUniqueInputObjectSchema } from "./objects/DoctorWhereUniqueInput.schema"
import { DoctorCountAggregateInputObjectSchema } from "./objects/DoctorCountAggregateInput.schema"
import { DoctorMinAggregateInputObjectSchema } from "./objects/DoctorMinAggregateInput.schema"
import { DoctorMaxAggregateInputObjectSchema } from "./objects/DoctorMaxAggregateInput.schema"
import { DoctorAvgAggregateInputObjectSchema } from "./objects/DoctorAvgAggregateInput.schema"
import { DoctorSumAggregateInputObjectSchema } from "./objects/DoctorSumAggregateInput.schema"

export const DoctorAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), DoctorCountAggregateInputObjectSchema])
    .optional(),
  _min: DoctorMinAggregateInputObjectSchema.optional(),
  _max: DoctorMaxAggregateInputObjectSchema.optional(),
  _avg: DoctorAvgAggregateInputObjectSchema.optional(),
  _sum: DoctorSumAggregateInputObjectSchema.optional(),
})
