import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    status: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    pageId: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
    photoId: z.literal(true).optional(),
  })
  .strict()

export const PageArtworkMinAggregateInputObjectSchema = Schema
