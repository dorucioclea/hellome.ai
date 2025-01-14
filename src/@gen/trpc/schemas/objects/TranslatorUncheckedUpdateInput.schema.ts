import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedUpdateManyWithoutTranslatorNestedInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutTranslatorNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.TranslatorUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pageTexts: z
      .lazy(
        () =>
          PageTextUncheckedUpdateManyWithoutTranslatorNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const TranslatorUncheckedUpdateInputObjectSchema = Schema
