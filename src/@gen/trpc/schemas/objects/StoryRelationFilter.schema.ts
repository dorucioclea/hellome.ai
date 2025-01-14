import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryWhereInputObjectSchema } from "./StoryWhereInput.schema"

const Schema: z.ZodType<Prisma.StoryRelationFilter> = z
  .object({
    is: z.lazy(() => StoryWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  })
  .strict()

export const StoryRelationFilterObjectSchema = Schema
