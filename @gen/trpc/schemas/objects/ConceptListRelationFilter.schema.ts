import { z } from 'zod'
import { ConceptWhereInputObjectSchema } from './ConceptWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptListRelationFilter> = z
  .object({
    every: z.lazy(() => ConceptWhereInputObjectSchema).optional(),
    some: z.lazy(() => ConceptWhereInputObjectSchema).optional(),
    none: z.lazy(() => ConceptWhereInputObjectSchema).optional(),
  })
  .strict()

export const ConceptListRelationFilterObjectSchema = Schema
