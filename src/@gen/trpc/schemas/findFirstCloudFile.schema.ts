import { z } from "zod"

import { CloudFileScalarFieldEnumSchema } from "./enums/CloudFileScalarFieldEnum.schema"
import { CloudFileIncludeObjectSchema } from "./objects/CloudFileInclude.schema"
import { CloudFileOrderByWithRelationInputObjectSchema } from "./objects/CloudFileOrderByWithRelationInput.schema"
import { CloudFileSelectObjectSchema } from "./objects/CloudFileSelect.schema"
import { CloudFileWhereInputObjectSchema } from "./objects/CloudFileWhereInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./objects/CloudFileWhereUniqueInput.schema"

export const CloudFileFindFirstSchema = z.object({
  select: CloudFileSelectObjectSchema.optional(),
  include: CloudFileIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      CloudFileOrderByWithRelationInputObjectSchema,
      CloudFileOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CloudFileWhereInputObjectSchema.optional(),
  cursor: CloudFileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CloudFileScalarFieldEnumSchema).optional(),
})
