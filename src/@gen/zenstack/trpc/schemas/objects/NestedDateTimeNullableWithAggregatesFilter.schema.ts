/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedDateTimeNullableFilterObjectSchema } from "./NestedDateTimeNullableFilter.schema"
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.NestedDateTimeNullableWithAggregatesFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    in: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    notIn: z
      .union([
        z.union([z.date().array(), z.string().datetime().array().optional()]),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    lt: z.union([z.date().optional(), z.string().datetime().optional()]),
    lte: z.union([z.date().optional(), z.string().datetime().optional()]),
    gt: z.union([z.date().optional(), z.string().datetime().optional()]),
    gte: z.union([z.date().optional(), z.string().datetime().optional()]),
    not: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => NestedDateTimeNullableWithAggregatesFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
  })
  .strict()

export const NestedDateTimeNullableWithAggregatesFilterObjectSchema = Schema
