import { z } from "zod"

import { PDFIncludeObjectSchema } from "./objects/PDFInclude.schema"
import { PDFSelectObjectSchema } from "./objects/PDFSelect.schema"
import { PDFUncheckedUpdateInputObjectSchema } from "./objects/PDFUncheckedUpdateInput.schema"
import { PDFUpdateInputObjectSchema } from "./objects/PDFUpdateInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./objects/PDFWhereUniqueInput.schema"

export const PDFUpdateOneSchema = z.object({
  select: PDFSelectObjectSchema.optional(),
  include: PDFIncludeObjectSchema.optional(),
  data: z.union([
    PDFUpdateInputObjectSchema,
    PDFUncheckedUpdateInputObjectSchema,
  ]),
  where: PDFWhereUniqueInputObjectSchema,
})
