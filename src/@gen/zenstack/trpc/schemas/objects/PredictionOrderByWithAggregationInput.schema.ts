/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PredictionCountOrderByAggregateInputObjectSchema } from "./PredictionCountOrderByAggregateInput.schema"
import { PredictionMaxOrderByAggregateInputObjectSchema } from "./PredictionMaxOrderByAggregateInput.schema"
import { PredictionMinOrderByAggregateInputObjectSchema } from "./PredictionMinOrderByAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PredictionOrderByWithAggregationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    input: z.lazy(() => SortOrderSchema).optional(),
    output: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    started_at: z.lazy(() => SortOrderSchema).optional(),
    completed_at: z.lazy(() => SortOrderSchema).optional(),
    version: z.lazy(() => SortOrderSchema).optional(),
    metrics: z.lazy(() => SortOrderSchema).optional(),
    error: z.lazy(() => SortOrderSchema).optional(),
    logs: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PredictionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PredictionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PredictionMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const PredictionOrderByWithAggregationInputObjectSchema = Schema
