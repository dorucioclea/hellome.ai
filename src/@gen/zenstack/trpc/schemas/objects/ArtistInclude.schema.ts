/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkSchema } from "../PageArtwork.schema"
import { StorySchema } from "../Story.schema"
import { ArtistCountOutputTypeArgsObjectSchema } from "./ArtistCountOutputTypeArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.ArtistInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    stories: z
      .union([z.boolean(), z.lazy(() => StorySchema.findMany)])
      .optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkSchema.findMany)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ArtistCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const ArtistIncludeObjectSchema = Schema
