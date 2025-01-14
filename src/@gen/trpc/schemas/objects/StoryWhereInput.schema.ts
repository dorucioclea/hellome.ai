import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistRelationFilterObjectSchema } from "./ArtistRelationFilter.schema"
import { ArtistWhereInputObjectSchema } from "./ArtistWhereInput.schema"
import { AuthorRelationFilterObjectSchema } from "./AuthorRelationFilter.schema"
import { AuthorWhereInputObjectSchema } from "./AuthorWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { PageArtworkListRelationFilterObjectSchema } from "./PageArtworkListRelationFilter.schema"
import { PageListRelationFilterObjectSchema } from "./PageListRelationFilter.schema"
import { PageTextListRelationFilterObjectSchema } from "./PageTextListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

const Schema: z.ZodType<Prisma.StoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StoryWhereInputObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StoryWhereInputObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    artistId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    authorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    artist: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    author: z
      .union([
        z.lazy(() => AuthorRelationFilterObjectSchema),
        z.lazy(() => AuthorWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    pages: z.lazy(() => PageListRelationFilterObjectSchema).optional(),
    pageArtworks: z
      .lazy(() => PageArtworkListRelationFilterObjectSchema)
      .optional(),
    pageTexts: z.lazy(() => PageTextListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const StoryWhereInputObjectSchema = Schema
