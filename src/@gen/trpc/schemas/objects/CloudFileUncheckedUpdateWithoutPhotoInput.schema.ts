import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { NullableJsonNullValueInputSchema } from "../enums/NullableJsonNullValueInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { EnumCloudFileRegionFieldUpdateOperationsInputObjectSchema } from "./EnumCloudFileRegionFieldUpdateOperationsInput.schema"
import { EnumFilePrivacyFieldUpdateOperationsInputObjectSchema } from "./EnumFilePrivacyFieldUpdateOperationsInput.schema"
import { EnumFileResourceTypeFieldUpdateOperationsInputObjectSchema } from "./EnumFileResourceTypeFieldUpdateOperationsInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { PDFUncheckedUpdateOneWithoutFileNestedInputObjectSchema } from "./PDFUncheckedUpdateOneWithoutFileNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
)

const Schema: z.ZodType<Prisma.CloudFileUncheckedUpdateWithoutPhotoInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    filename: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stem: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    extension: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    size: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mime: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => FileResourceTypeSchema),
        z.lazy(
          () => EnumFileResourceTypeFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional(),
    metadata: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    key: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    bucket: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    region: z
      .union([
        z.lazy(() => CloudFileRegionSchema),
        z.lazy(() => EnumCloudFileRegionFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    publicUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    privacy: z
      .union([
        z.lazy(() => FilePrivacySchema),
        z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputObjectSchema),
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
    pdf: z
      .lazy(() => PDFUncheckedUpdateOneWithoutFileNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileUncheckedUpdateWithoutPhotoInputObjectSchema = Schema
