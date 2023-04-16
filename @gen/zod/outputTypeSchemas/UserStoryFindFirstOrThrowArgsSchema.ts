import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryIncludeSchema } from '../inputTypeSchemas/UserStoryIncludeSchema'
import { UserStoryWhereInputSchema } from '../inputTypeSchemas/UserStoryWhereInputSchema'
import { UserStoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserStoryOrderByWithRelationInputSchema'
import { UserStoryWhereUniqueInputSchema } from '../inputTypeSchemas/UserStoryWhereUniqueInputSchema'
import { UserStoryScalarFieldEnumSchema } from '../inputTypeSchemas/UserStoryScalarFieldEnumSchema'
import { StoryArgsSchema } from "../outputTypeSchemas/StoryArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserStorySelectSchema: z.ZodType<Prisma.UserStorySelect> = z.object({
  id: z.boolean().optional(),
  storyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
}).strict()

export const UserStoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserStoryFindFirstOrThrowArgs> = z.object({
  select: UserStorySelectSchema.optional(),
  include: UserStoryIncludeSchema.optional(),
  where: UserStoryWhereInputSchema.optional(),
  orderBy: z.union([ UserStoryOrderByWithRelationInputSchema.array(),UserStoryOrderByWithRelationInputSchema ]).optional(),
  cursor: UserStoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserStoryScalarFieldEnumSchema.array().optional(),
}).strict()

export default UserStoryFindFirstOrThrowArgsSchema;
