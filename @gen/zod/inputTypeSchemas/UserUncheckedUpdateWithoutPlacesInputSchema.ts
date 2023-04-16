import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SexSchema } from './SexSchema';
import { EnumSexFieldUpdateOperationsInputSchema } from './EnumSexFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';
import { FamilyUncheckedUpdateManyWithoutUserNestedInputSchema } from './FamilyUncheckedUpdateManyWithoutUserNestedInputSchema';
import { ConceptPersonUncheckedUpdateOneWithoutUserNestedInputSchema } from './ConceptPersonUncheckedUpdateOneWithoutUserNestedInputSchema';
import { ConceptThingUncheckedUpdateManyWithoutUserNestedInputSchema } from './ConceptThingUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutPlacesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPlacesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  faceMeshId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nickname: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  birthdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.lazy(() => SexSchema),z.lazy(() => EnumSexFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  genderPronounSingluar: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genderPronounPlural: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  families: z.lazy(() => FamilyUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  person: z.lazy(() => ConceptPersonUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutPlacesInputSchema;
