/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema"
import { PhotoCreateNestedOneWithoutFileInputObjectSchema } from "./PhotoCreateNestedOneWithoutFileInput.schema"

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
)

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileCreateWithoutPdfInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    filename: z.string(),
    stem: z.string(),
    extension: z.string(),
    size: z.number(),
    mime: z.string(),
    resourceType: z.lazy(() => FileResourceTypeSchema),
    metadata: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    key: z.string(),
    bucket: z.string(),
    region: z.lazy(() => CloudFileRegionSchema),
    publicUrl: z.string().optional().nullable(),
    privacy: z.lazy(() => FilePrivacySchema).optional(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    photo: z
      .lazy(() => PhotoCreateNestedOneWithoutFileInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileCreateWithoutPdfInputObjectSchema = Schema
