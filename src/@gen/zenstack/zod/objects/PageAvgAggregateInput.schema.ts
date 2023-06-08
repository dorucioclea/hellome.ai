/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.PageAvgAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    pageNumber: z.literal(true).optional(),
  })
  .strict()

export const PageAvgAggregateInputObjectSchema = Schema
