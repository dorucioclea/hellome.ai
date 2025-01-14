/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./ArtistCreateNestedOneWithoutPageArtworksInput.schema"
import { PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./PhotoCreateNestedOneWithoutPageArtworksInput.schema"
import { StoryCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./StoryCreateNestedOneWithoutPageArtworksInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateWithoutPageInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => PageStatusSchema).optional(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    story: z.lazy(
      () => StoryCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
    artist: z.lazy(
      () => ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
    photo: z.lazy(
      () => PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
  })
  .strict()

export const PageArtworkCreateWithoutPageInputObjectSchema = Schema
