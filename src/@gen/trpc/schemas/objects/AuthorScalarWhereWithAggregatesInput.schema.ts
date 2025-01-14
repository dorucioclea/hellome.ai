import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.AuthorScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const AuthorScalarWhereWithAggregatesInputObjectSchema = Schema
