/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedBoolFilterObjectSchema } from "./NestedBoolFilter.schema"
import { NestedBoolWithAggregatesFilterObjectSchema } from "./NestedBoolWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.BoolWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([
        z.boolean(),
        z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
  })
  .strict()

export const BoolWithAggregatesFilterObjectSchema = Schema
