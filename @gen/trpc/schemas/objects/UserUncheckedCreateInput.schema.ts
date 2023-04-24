import { z } from 'zod'
import { EditionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './EditionUncheckedCreateNestedManyWithoutUserInput.schema'
import { ConceptUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ConceptUncheckedCreateNestedOneWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    Edition: z
      .lazy(() => EditionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Concept: z
      .lazy(() => ConceptUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUncheckedCreateInputObjectSchema = Schema
