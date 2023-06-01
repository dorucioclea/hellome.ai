/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyArtistInputObjectSchema } from "./PageArtworkCreateManyArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateManyArtistInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageArtworkCreateManyArtistInputObjectSchema),
      z.lazy(() => PageArtworkCreateManyArtistInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageArtworkCreateManyArtistInputEnvelopeObjectSchema = Schema