/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedFloatFilterObjectSchema } from "./NestedFloatFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.FloatFilter, "zenstack_transaction" | "zenstack_guard">
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
      .union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)])
      .optional(),
  })
  .strict()

export const FloatFilterObjectSchema = Schema
