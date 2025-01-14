import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileIncludeObjectSchema } from "./CloudFileInclude.schema"
import { CloudFileSelectObjectSchema } from "./CloudFileSelect.schema"

const Schema: z.ZodType<Prisma.CloudFileArgs> = z
  .object({
    select: z.lazy(() => CloudFileSelectObjectSchema).optional(),
    include: z.lazy(() => CloudFileIncludeObjectSchema).optional(),
  })
  .strict()

export const CloudFileArgsObjectSchema = Schema
