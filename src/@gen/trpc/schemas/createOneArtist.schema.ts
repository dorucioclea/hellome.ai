import { z } from "zod"

import { ArtistCreateInputObjectSchema } from "./objects/ArtistCreateInput.schema"
import { ArtistIncludeObjectSchema } from "./objects/ArtistInclude.schema"
import { ArtistSelectObjectSchema } from "./objects/ArtistSelect.schema"
import { ArtistUncheckedCreateInputObjectSchema } from "./objects/ArtistUncheckedCreateInput.schema"

export const ArtistCreateOneSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  data: z.union([
    ArtistCreateInputObjectSchema,
    ArtistUncheckedCreateInputObjectSchema,
  ]),
})
