import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.StoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StoryCountOrderByAggregateInputSchema;
