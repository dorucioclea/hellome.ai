import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    status: z.literal(true).optional(),
    locale: z.literal(true).optional(),
    text: z.literal(true).optional(),
    type: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    pageId: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    translatorId: z.literal(true).optional(),
  })
  .strict()

export const PageTextMinAggregateInputObjectSchema = Schema
