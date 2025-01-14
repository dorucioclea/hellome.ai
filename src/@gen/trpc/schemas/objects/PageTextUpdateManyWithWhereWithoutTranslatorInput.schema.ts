import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextScalarWhereInputObjectSchema } from "./PageTextScalarWhereInput.schema"
import { PageTextUncheckedUpdateManyWithoutPageTextsInputObjectSchema } from "./PageTextUncheckedUpdateManyWithoutPageTextsInput.schema"
import { PageTextUpdateManyMutationInputObjectSchema } from "./PageTextUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.PageTextUpdateManyWithWhereWithoutTranslatorInput> =
  z
    .object({
      where: z.lazy(() => PageTextScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => PageTextUncheckedUpdateManyWithoutPageTextsInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const PageTextUpdateManyWithWhereWithoutTranslatorInputObjectSchema =
  Schema
