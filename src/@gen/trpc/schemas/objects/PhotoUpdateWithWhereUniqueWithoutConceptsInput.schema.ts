import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoUncheckedUpdateWithoutConceptsInputObjectSchema } from "./PhotoUncheckedUpdateWithoutConceptsInput.schema"
import { PhotoUpdateWithoutConceptsInputObjectSchema } from "./PhotoUpdateWithoutConceptsInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PhotoUpdateWithWhereUniqueWithoutConceptsInput> =
  z
    .object({
      where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PhotoUpdateWithoutConceptsInputObjectSchema),
        z.lazy(() => PhotoUncheckedUpdateWithoutConceptsInputObjectSchema),
      ]),
    })
    .strict()

export const PhotoUpdateWithWhereUniqueWithoutConceptsInputObjectSchema = Schema
