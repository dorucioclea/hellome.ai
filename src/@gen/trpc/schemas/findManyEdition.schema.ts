import { z } from "zod"

import { EditionScalarFieldEnumSchema } from "./enums/EditionScalarFieldEnum.schema"
import { EditionIncludeObjectSchema } from "./objects/EditionInclude.schema"
import { EditionOrderByWithRelationInputObjectSchema } from "./objects/EditionOrderByWithRelationInput.schema"
import { EditionSelectObjectSchema } from "./objects/EditionSelect.schema"
import { EditionWhereInputObjectSchema } from "./objects/EditionWhereInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./objects/EditionWhereUniqueInput.schema"

export const EditionFindManySchema = z.object({
  select: z.lazy(() => EditionSelectObjectSchema.optional()),
  include: z.lazy(() => EditionIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      EditionOrderByWithRelationInputObjectSchema,
      EditionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EditionWhereInputObjectSchema.optional(),
  cursor: EditionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EditionScalarFieldEnumSchema).optional(),
})
