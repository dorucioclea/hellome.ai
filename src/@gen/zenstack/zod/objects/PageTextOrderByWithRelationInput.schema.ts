/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { AuthorOrderByWithRelationInputObjectSchema } from "./AuthorOrderByWithRelationInput.schema"
import { PageOrderByWithRelationInputObjectSchema } from "./PageOrderByWithRelationInput.schema"
import { StoryOrderByWithRelationInputObjectSchema } from "./StoryOrderByWithRelationInput.schema"
import { TranslatorOrderByWithRelationInputObjectSchema } from "./TranslatorOrderByWithRelationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextOrderByWithRelationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => SortOrderSchema).optional(),
    locale: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    pageId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    translatorId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    page: z.lazy(() => PageOrderByWithRelationInputObjectSchema).optional(),
    story: z.lazy(() => StoryOrderByWithRelationInputObjectSchema).optional(),
    author: z.lazy(() => AuthorOrderByWithRelationInputObjectSchema).optional(),
    translator: z
      .lazy(() => TranslatorOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageTextOrderByWithRelationInputObjectSchema = Schema
