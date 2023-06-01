/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { QueryModeSchema } from "../enums/QueryMode.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedStringFilterObjectSchema } from "./NestedStringFilter.schema"
import { NestedStringWithAggregatesFilterObjectSchema } from "./NestedStringWithAggregatesFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StringWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedStringWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  })
  .strict()

export const StringWithAggregatesFilterObjectSchema = Schema