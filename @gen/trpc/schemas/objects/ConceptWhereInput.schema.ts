import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"
import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DreamBoothTrainingRelationFilterObjectSchema } from "./DreamBoothTrainingRelationFilter.schema"
import { DreamBoothTrainingWhereInputObjectSchema } from "./DreamBoothTrainingWhereInput.schema"
import { EnumConceptStatusFilterObjectSchema } from "./EnumConceptStatusFilter.schema"
import { EnumConceptTypeFilterObjectSchema } from "./EnumConceptTypeFilter.schema"
import { PhotoListRelationFilterObjectSchema } from "./PhotoListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"

const Schema: z.ZodType<Prisma.ConceptWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConceptWhereInputObjectSchema),
        z.lazy(() => ConceptWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConceptWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConceptWhereInputObjectSchema),
        z.lazy(() => ConceptWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumConceptTypeFilterObjectSchema),
        z.lazy(() => ConceptTypeSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumConceptStatusFilterObjectSchema),
        z.lazy(() => ConceptStatusSchema),
      ])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    prompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    identifier: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    classNoun: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    negativePrompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    instancePrompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    classPrompt: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    positivePrompts: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    negativePrompts: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    dreamboothTrainingId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dreamboothModelURI: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dreamboothTraining: z
      .union([
        z.lazy(() => DreamBoothTrainingRelationFilterObjectSchema),
        z.lazy(() => DreamBoothTrainingWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    photos: z.lazy(() => PhotoListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const ConceptWhereInputObjectSchema = Schema
