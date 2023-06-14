/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileWhereInputObjectSchema } from "./CloudFileWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    is: z.lazy(() => CloudFileWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => CloudFileWhereInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileRelationFilterObjectSchema = Schema