/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateWithoutTranslatorInputObjectSchema } from "./PageTextCreateWithoutTranslatorInput.schema"
import { PageTextUncheckedCreateWithoutTranslatorInputObjectSchema } from "./PageTextUncheckedCreateWithoutTranslatorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateOrConnectWithoutTranslatorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextCreateOrConnectWithoutTranslatorInputObjectSchema = Schema
