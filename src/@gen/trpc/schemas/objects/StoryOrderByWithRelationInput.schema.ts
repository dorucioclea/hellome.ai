import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { ArtistOrderByWithRelationInputObjectSchema } from "./ArtistOrderByWithRelationInput.schema"
import { AuthorOrderByWithRelationInputObjectSchema } from "./AuthorOrderByWithRelationInput.schema"
import { PageArtworkOrderByRelationAggregateInputObjectSchema } from "./PageArtworkOrderByRelationAggregateInput.schema"
import { PageOrderByRelationAggregateInputObjectSchema } from "./PageOrderByRelationAggregateInput.schema"
import { PageTextOrderByRelationAggregateInputObjectSchema } from "./PageTextOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<Prisma.StoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    author: z.lazy(() => AuthorOrderByWithRelationInputObjectSchema).optional(),
    pages: z
      .lazy(() => PageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pageTexts: z
      .lazy(() => PageTextOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const StoryOrderByWithRelationInputObjectSchema = Schema
