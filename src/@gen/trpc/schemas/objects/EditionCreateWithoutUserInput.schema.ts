import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateNestedOneWithoutEditionInputObjectSchema } from "./PDFCreateNestedOneWithoutEditionInput.schema"

const Schema: z.ZodType<Prisma.EditionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    pdf: z.lazy(() => PDFCreateNestedOneWithoutEditionInputObjectSchema),
  })
  .strict()

export const EditionCreateWithoutUserInputObjectSchema = Schema
