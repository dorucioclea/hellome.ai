import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { EnumPageStatusFieldUpdateOperationsInputObjectSchema } from './EnumPageStatusFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpdateManyMutationInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => PageStatusSchema),
        z.lazy(() => EnumPageStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PageArtworkUpdateManyMutationInputObjectSchema = Schema
