/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateNestedManyWithoutAuthorInputObjectSchema } from "./PageTextCreateNestedManyWithoutAuthorInput.schema"
import { UserCreateNestedOneWithoutAuthorInputObjectSchema } from "./UserCreateNestedOneWithoutAuthorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.AuthorCreateWithoutStoriesInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAuthorInputObjectSchema),
  })
  .strict()

export const AuthorCreateWithoutStoriesInputObjectSchema = Schema
