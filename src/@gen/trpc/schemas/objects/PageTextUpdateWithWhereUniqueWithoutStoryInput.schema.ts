import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedUpdateWithoutStoryInputObjectSchema } from "./PageTextUncheckedUpdateWithoutStoryInput.schema"
import { PageTextUpdateWithoutStoryInputObjectSchema } from "./PageTextUpdateWithoutStoryInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema = Schema
