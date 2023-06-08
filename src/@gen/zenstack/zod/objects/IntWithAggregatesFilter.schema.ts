/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedFloatFilterObjectSchema } from "./NestedFloatFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedIntWithAggregatesFilterObjectSchema } from "./NestedIntWithAggregatesFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.IntWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.number().optional(),
    in: z.union([z.number().array(), z.number()]).optional(),
    notIn: z.union([z.number().array(), z.number()]).optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([
        z.number(),
        z.lazy(() => NestedIntWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  })
  .strict()

export const IntWithAggregatesFilterObjectSchema = Schema
