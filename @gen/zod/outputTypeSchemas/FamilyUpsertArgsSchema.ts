import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyIncludeSchema } from '../inputTypeSchemas/FamilyIncludeSchema'
import { FamilyWhereUniqueInputSchema } from '../inputTypeSchemas/FamilyWhereUniqueInputSchema'
import { FamilyCreateInputSchema } from '../inputTypeSchemas/FamilyCreateInputSchema'
import { FamilyUncheckedCreateInputSchema } from '../inputTypeSchemas/FamilyUncheckedCreateInputSchema'
import { FamilyUpdateInputSchema } from '../inputTypeSchemas/FamilyUpdateInputSchema'
import { FamilyUncheckedUpdateInputSchema } from '../inputTypeSchemas/FamilyUncheckedUpdateInputSchema'
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ConceptPlaceFindManyArgsSchema } from "../outputTypeSchemas/ConceptPlaceFindManyArgsSchema"
import { ConceptThingFindManyArgsSchema } from "../outputTypeSchemas/ConceptThingFindManyArgsSchema"
import { FamilyCountOutputTypeArgsSchema } from "../outputTypeSchemas/FamilyCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FamilySelectSchema: z.ZodType<Prisma.FamilySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  places: z.union([z.boolean(),z.lazy(() => ConceptPlaceFindManyArgsSchema)]).optional(),
  things: z.union([z.boolean(),z.lazy(() => ConceptThingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FamilyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FamilyUpsertArgsSchema: z.ZodType<Prisma.FamilyUpsertArgs> = z.object({
  select: FamilySelectSchema.optional(),
  include: FamilyIncludeSchema.optional(),
  where: FamilyWhereUniqueInputSchema,
  create: z.union([ FamilyCreateInputSchema,FamilyUncheckedCreateInputSchema ]),
  update: z.union([ FamilyUpdateInputSchema,FamilyUncheckedUpdateInputSchema ]),
}).strict()

export default FamilyUpsertArgsSchema;
