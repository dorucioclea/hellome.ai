import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRelationFilterObjectSchema } from "./CloudFileRelationFilter.schema"
import { CloudFileWhereInputObjectSchema } from "./CloudFileWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { EditionRelationFilterObjectSchema } from "./EditionRelationFilter.schema"
import { EditionWhereInputObjectSchema } from "./EditionWhereInput.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"

const Schema: z.ZodType<Prisma.PDFWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PDFWhereInputObjectSchema),
        z.lazy(() => PDFWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PDFWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PDFWhereInputObjectSchema),
        z.lazy(() => PDFWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    height: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    width: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    pages: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    fileId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    file: z
      .union([
        z.lazy(() => CloudFileRelationFilterObjectSchema),
        z.lazy(() => CloudFileWhereInputObjectSchema),
      ])
      .optional(),
    edition: z
      .union([
        z.lazy(() => EditionRelationFilterObjectSchema),
        z.lazy(() => EditionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const PDFWhereInputObjectSchema = Schema
