import { z } from 'zod'
import { PhotoArgsObjectSchema } from './PhotoArgs.schema'
import { PDFArgsObjectSchema } from './PDFArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileSelect> = z
  .object({
    id: z.boolean().optional(),
    resourceType: z.boolean().optional(),
    filename: z.boolean().optional(),
    size: z.boolean().optional(),
    ext: z.boolean().optional(),
    mime: z.boolean().optional(),
    metadata: z.boolean().optional(),
    path: z.boolean().optional(),
    signature: z.boolean().optional(),
    privacy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const CloudFileSelectObjectSchema = Schema
