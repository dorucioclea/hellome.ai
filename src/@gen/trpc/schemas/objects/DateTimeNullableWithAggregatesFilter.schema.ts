import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedDateTimeNullableFilterObjectSchema } from "./NestedDateTimeNullableFilter.schema"
import { NestedDateTimeNullableWithAggregatesFilterObjectSchema } from "./NestedDateTimeNullableWithAggregatesFilter.schema"
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema"

const Schema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z
  .object({
    equals: z.date().optional().nullable(),
    in: z.union([z.date().array(), z.date()]).optional().nullable(),
    notIn: z.union([z.date().array(), z.date()]).optional().nullable(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z
      .union([
        z.date(),
        z.lazy(() => NestedDateTimeNullableWithAggregatesFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
  })
  .strict()

export const DateTimeNullableWithAggregatesFilterObjectSchema = Schema
