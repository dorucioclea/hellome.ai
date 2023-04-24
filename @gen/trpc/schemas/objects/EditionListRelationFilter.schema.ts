import { z } from 'zod'
import { EditionWhereInputObjectSchema } from './EditionWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionListRelationFilter> = z
  .object({
    every: z.lazy(() => EditionWhereInputObjectSchema).optional(),
    some: z.lazy(() => EditionWhereInputObjectSchema).optional(),
    none: z.lazy(() => EditionWhereInputObjectSchema).optional(),
  })
  .strict()

export const EditionListRelationFilterObjectSchema = Schema
