import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema } from './ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema';
import { ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema } from './ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema';

export const FamilyUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.FamilyUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  places: z.lazy(() => ConceptPlaceUncheckedUpdateManyWithoutFamilyNestedInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedUpdateManyWithoutFamilyNestedInputSchema).optional()
}).strict();

export default FamilyUncheckedUpdateWithoutUserInputSchema;
