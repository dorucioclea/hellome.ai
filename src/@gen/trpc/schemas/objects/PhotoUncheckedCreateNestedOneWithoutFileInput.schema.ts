import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateOrConnectWithoutFileInputObjectSchema } from "./PhotoCreateOrConnectWithoutFileInput.schema"
import { PhotoCreateWithoutFileInputObjectSchema } from "./PhotoCreateWithoutFileInput.schema"
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from "./PhotoUncheckedCreateWithoutFileInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateNestedOneWithoutFileInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PhotoCreateWithoutFileInputObjectSchema),
          z.lazy(() => PhotoUncheckedCreateWithoutFileInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PhotoCreateOrConnectWithoutFileInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PhotoWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const PhotoUncheckedCreateNestedOneWithoutFileInputObjectSchema = Schema
