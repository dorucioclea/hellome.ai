import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z
  .object({
    equals: z.date().optional().nullable(),
    in: z.union([z.date().array(), z.date()]).optional().nullable(),
    notIn: z.union([z.date().array(), z.date()]).optional().nullable(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z
      .union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const NestedDateTimeNullableFilterObjectSchema = Schema
