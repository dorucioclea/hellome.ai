/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateWithoutFileInputObjectSchema } from "./PhotoCreateWithoutFileInput.schema"
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from "./PhotoUncheckedCreateWithoutFileInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoCreateOrConnectWithoutFileInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutFileInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoCreateOrConnectWithoutFileInputObjectSchema = Schema
