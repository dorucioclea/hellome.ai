import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUncheckedCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    pageId: z.string(),
    storyId: z.string(),
    photoId: z.string(),
  })
  .strict()

export const PageArtworkUncheckedCreateWithoutArtistInputObjectSchema = Schema
