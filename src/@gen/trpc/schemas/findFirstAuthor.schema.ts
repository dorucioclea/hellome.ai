import { z } from "zod"

import { AuthorScalarFieldEnumSchema } from "./enums/AuthorScalarFieldEnum.schema"
import { AuthorIncludeObjectSchema } from "./objects/AuthorInclude.schema"
import { AuthorOrderByWithRelationInputObjectSchema } from "./objects/AuthorOrderByWithRelationInput.schema"
import { AuthorSelectObjectSchema } from "./objects/AuthorSelect.schema"
import { AuthorWhereInputObjectSchema } from "./objects/AuthorWhereInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./objects/AuthorWhereUniqueInput.schema"

export const AuthorFindFirstSchema = z.object({
  select: AuthorSelectObjectSchema.optional(),
  include: AuthorIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      AuthorOrderByWithRelationInputObjectSchema,
      AuthorOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AuthorWhereInputObjectSchema.optional(),
  cursor: AuthorWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AuthorScalarFieldEnumSchema).optional(),
})
