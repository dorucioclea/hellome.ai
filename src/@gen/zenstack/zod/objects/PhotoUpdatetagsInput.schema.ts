/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.PhotoUpdatetagsInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
  })
  .strict()

export const PhotoUpdatetagsInputObjectSchema = Schema
