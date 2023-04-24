import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { NestedEnumPageStatusFilterObjectSchema } from './NestedEnumPageStatusFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumPageStatusFilter> = z
  .object({
    equals: z.lazy(() => PageStatusSchema).optional(),
    in: z
      .lazy(() => PageStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PageStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => PageStatusSchema),
        z.lazy(() => NestedEnumPageStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumPageStatusFilterObjectSchema = Schema
