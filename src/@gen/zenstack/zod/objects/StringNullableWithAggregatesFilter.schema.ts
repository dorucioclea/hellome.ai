/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { QueryModeSchema } from "../enums/QueryMode.schema"
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema"
import { NestedStringNullableFilterObjectSchema } from "./NestedStringNullableFilter.schema"
import { NestedStringNullableWithAggregatesFilterObjectSchema } from "./NestedStringNullableWithAggregatesFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StringNullableWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.union([z.string().array(), z.string()]).optional().nullable(),
    notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
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
        z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  })
  .strict()

export const StringNullableWithAggregatesFilterObjectSchema = Schema
