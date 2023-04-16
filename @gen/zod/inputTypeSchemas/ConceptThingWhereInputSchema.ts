import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { FamilyRelationFilterSchema } from './FamilyRelationFilterSchema';
import { FamilyWhereInputSchema } from './FamilyWhereInputSchema';

export const ConceptThingWhereInputSchema: z.ZodType<Prisma.ConceptThingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptThingWhereInputSchema),z.lazy(() => ConceptThingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptThingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptThingWhereInputSchema),z.lazy(() => ConceptThingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  familyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  Family: z.union([ z.lazy(() => FamilyRelationFilterSchema),z.lazy(() => FamilyWhereInputSchema) ]).optional(),
}).strict();

export default ConceptThingWhereInputSchema;
