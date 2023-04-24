import { z } from 'zod'
import { PageArtworkIncludeObjectSchema } from './objects/PageArtworkInclude.schema'
import { PageArtworkOrderByWithRelationInputObjectSchema } from './objects/PageArtworkOrderByWithRelationInput.schema'
import { PageArtworkWhereInputObjectSchema } from './objects/PageArtworkWhereInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './objects/PageArtworkWhereUniqueInput.schema'
import { PageArtworkScalarFieldEnumSchema } from './enums/PageArtworkScalarFieldEnum.schema'

export const PageArtworkFindFirstSchema = z.object({
  include: PageArtworkIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PageArtworkOrderByWithRelationInputObjectSchema,
      PageArtworkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PageArtworkWhereInputObjectSchema.optional(),
  cursor: PageArtworkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PageArtworkScalarFieldEnumSchema).optional(),
})
