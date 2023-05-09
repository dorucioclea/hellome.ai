import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptStatusSchema } from "../enums/ConceptStatus.schema"
import { ConceptTypeSchema } from "../enums/ConceptType.schema"
import { ConceptUpdatenegativePromptsInputObjectSchema } from "./ConceptUpdatenegativePromptsInput.schema"
import { ConceptUpdatepositivePromptsInputObjectSchema } from "./ConceptUpdatepositivePromptsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { DreamBoothTrainingUpdateOneWithoutConceptNestedInputObjectSchema } from "./DreamBoothTrainingUpdateOneWithoutConceptNestedInput.schema"
import { EnumConceptStatusFieldUpdateOperationsInputObjectSchema } from "./EnumConceptStatusFieldUpdateOperationsInput.schema"
import { EnumConceptTypeFieldUpdateOperationsInputObjectSchema } from "./EnumConceptTypeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.ConceptUpdateWithoutPhotosInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => ConceptTypeSchema),
        z.lazy(() => EnumConceptTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => ConceptStatusSchema),
        z.lazy(() => EnumConceptStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    prompt: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    identifier: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    classNoun: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    negativePrompt: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    instancePrompt: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    classPrompt: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    positivePrompts: z
      .union([
        z.lazy(() => ConceptUpdatepositivePromptsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    negativePrompts: z
      .union([
        z.lazy(() => ConceptUpdatenegativePromptsInputObjectSchema),
        z.string().array(),
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
    dreamboothModelURI: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    dreamboothTraining: z
      .lazy(
        () => DreamBoothTrainingUpdateOneWithoutConceptNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const ConceptUpdateWithoutPhotosInputObjectSchema = Schema
