import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistIncludeObjectSchema } from "./ArtistInclude.schema"
import { ArtistSelectObjectSchema } from "./ArtistSelect.schema"

const Schema: z.ZodType<Prisma.ArtistArgs> = z
  .object({
    select: z.lazy(() => ArtistSelectObjectSchema).optional(),
    include: z.lazy(() => ArtistIncludeObjectSchema).optional(),
  })
  .strict()

export const ArtistArgsObjectSchema = Schema
