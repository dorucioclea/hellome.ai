/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.NestedIntNullableFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.union([z.number().array(), z.number()]).optional().nullable(),
    notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const NestedIntNullableFilterObjectSchema = Schema
