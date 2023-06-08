/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateWithoutPhotosInputObjectSchema } from "./ConceptCreateWithoutPhotosInput.schema"
import { ConceptUncheckedCreateWithoutPhotosInputObjectSchema } from "./ConceptUncheckedCreateWithoutPhotosInput.schema"
import { ConceptUncheckedUpdateWithoutPhotosInputObjectSchema } from "./ConceptUncheckedUpdateWithoutPhotosInput.schema"
import { ConceptUpdateWithoutPhotosInputObjectSchema } from "./ConceptUpdateWithoutPhotosInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./ConceptWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptUpsertWithWhereUniqueWithoutPhotosInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ConceptUpdateWithoutPhotosInputObjectSchema),
      z.lazy(() => ConceptUncheckedUpdateWithoutPhotosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema),
      z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptUpsertWithWhereUniqueWithoutPhotosInputObjectSchema = Schema
