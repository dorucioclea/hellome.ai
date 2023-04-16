import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingIncludeSchema } from '../inputTypeSchemas/ConceptThingIncludeSchema'
import { ConceptThingWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptThingWhereUniqueInputSchema'
import { ConceptThingCreateInputSchema } from '../inputTypeSchemas/ConceptThingCreateInputSchema'
import { ConceptThingUncheckedCreateInputSchema } from '../inputTypeSchemas/ConceptThingUncheckedCreateInputSchema'
import { ConceptThingUpdateInputSchema } from '../inputTypeSchemas/ConceptThingUpdateInputSchema'
import { ConceptThingUncheckedUpdateInputSchema } from '../inputTypeSchemas/ConceptThingUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FamilyArgsSchema } from "../outputTypeSchemas/FamilyArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConceptThingSelectSchema: z.ZodType<Prisma.ConceptThingSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  familyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Family: z.union([z.boolean(),z.lazy(() => FamilyArgsSchema)]).optional(),
}).strict()

export const ConceptThingUpsertArgsSchema: z.ZodType<Prisma.ConceptThingUpsertArgs> = z.object({
  select: ConceptThingSelectSchema.optional(),
  include: ConceptThingIncludeSchema.optional(),
  where: ConceptThingWhereUniqueInputSchema,
  create: z.union([ ConceptThingCreateInputSchema,ConceptThingUncheckedCreateInputSchema ]),
  update: z.union([ ConceptThingUpdateInputSchema,ConceptThingUncheckedUpdateInputSchema ]),
}).strict()

export default ConceptThingUpsertArgsSchema;
