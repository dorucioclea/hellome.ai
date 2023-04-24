import { z } from 'zod'
import { PageCreateWithoutStoryInputObjectSchema } from './PageCreateWithoutStoryInput.schema'
import { PageUncheckedCreateWithoutStoryInputObjectSchema } from './PageUncheckedCreateWithoutStoryInput.schema'
import { PageCreateOrConnectWithoutStoryInputObjectSchema } from './PageCreateOrConnectWithoutStoryInput.schema'
import { PageUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './PageUpsertWithWhereUniqueWithoutStoryInput.schema'
import { PageCreateManyStoryInputEnvelopeObjectSchema } from './PageCreateManyStoryInputEnvelope.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import { PageUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './PageUpdateWithWhereUniqueWithoutStoryInput.schema'
import { PageUpdateManyWithWhereWithoutStoryInputObjectSchema } from './PageUpdateManyWithWhereWithoutStoryInput.schema'
import { PageScalarWhereInputObjectSchema } from './PageScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutStoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageCreateWithoutStoryInputObjectSchema),
          z.lazy(() => PageCreateWithoutStoryInputObjectSchema).array(),
          z.lazy(() => PageUncheckedCreateWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageUncheckedCreateWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PageCreateOrConnectWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageCreateOrConnectWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PageUpsertWithWhereUniqueWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageUpsertWithWhereUniqueWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PageCreateManyStoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PageWhereUniqueInputObjectSchema),
          z.lazy(() => PageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PageWhereUniqueInputObjectSchema),
          z.lazy(() => PageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PageWhereUniqueInputObjectSchema),
          z.lazy(() => PageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PageWhereUniqueInputObjectSchema),
          z.lazy(() => PageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => PageUpdateWithWhereUniqueWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageUpdateWithWhereUniqueWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PageUpdateManyWithWhereWithoutStoryInputObjectSchema),
          z
            .lazy(() => PageUpdateManyWithWhereWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PageScalarWhereInputObjectSchema),
          z.lazy(() => PageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const PageUncheckedUpdateManyWithoutStoryNestedInputObjectSchema = Schema
