/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.PageWhereUniqueInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const PageWhereUniqueInputObjectSchema = Schema
