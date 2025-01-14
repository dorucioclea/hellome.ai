import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateNestedManyWithoutArtistInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutArtistInput.schema"
import { StoryCreateNestedManyWithoutArtistInputObjectSchema } from "./StoryCreateNestedManyWithoutArtistInput.schema"

const Schema: z.ZodType<Prisma.ArtistCreateInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistCreateInputObjectSchema = Schema
