import { z } from 'zod'
import { StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryRelationFilter> = z
  .object({
    is: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  })
  .strict()

export const StoryRelationFilterObjectSchema = Schema
