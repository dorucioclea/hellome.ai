/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutStoryInput.schema"
import { PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutStoryInput.schema"
import { PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from "./PageUncheckedCreateNestedManyWithoutStoryInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryUncheckedCreateWithoutArtistInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    authorId: z.string().optional().nullable(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pages: z
      .lazy(() => PageUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutStoryInputObjectSchema,
      )
      .optional(),
    pageTexts: z
      .lazy(
        () => PageTextUncheckedCreateNestedManyWithoutStoryInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const StoryUncheckedCreateWithoutArtistInputObjectSchema = Schema
