/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateWithoutPdfInputObjectSchema } from "./CloudFileCreateWithoutPdfInput.schema"
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from "./CloudFileUncheckedCreateWithoutPdfInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./CloudFileWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileCreateOrConnectWithoutPdfInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => CloudFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPdfInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPdfInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileCreateOrConnectWithoutPdfInputObjectSchema = Schema
