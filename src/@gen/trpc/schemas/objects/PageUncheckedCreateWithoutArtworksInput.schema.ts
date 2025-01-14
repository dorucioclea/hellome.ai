import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { PageTextUncheckedCreateNestedManyWithoutPageInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutPageInput.schema"

const Schema: z.ZodType<Prisma.PageUncheckedCreateWithoutArtworksInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    type: z.lazy(() => PageTypeSchema),
    pageNumber: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    storyId: z.string(),
    texts: z
      .lazy(() => PageTextUncheckedCreateNestedManyWithoutPageInputObjectSchema)
      .optional(),
  })
  .strict()

export const PageUncheckedCreateWithoutArtworksInputObjectSchema = Schema
