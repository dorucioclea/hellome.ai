import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"

const Schema: z.ZodType<Prisma.PageArtworkCreateManyStoryInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    pageId: z.string(),
    artistId: z.string(),
    photoId: z.string(),
  })
  .strict()

export const PageArtworkCreateManyStoryInputObjectSchema = Schema
