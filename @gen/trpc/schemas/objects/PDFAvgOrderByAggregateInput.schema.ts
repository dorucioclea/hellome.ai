import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFAvgOrderByAggregateInput> = z
  .object({
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    pages: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PDFAvgOrderByAggregateInputObjectSchema = Schema
