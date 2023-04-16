import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SexSchema } from './SexSchema';
import { GenderSchema } from './GenderSchema';
import { FamilyUncheckedCreateNestedManyWithoutUserInputSchema } from './FamilyUncheckedCreateNestedManyWithoutUserInputSchema';
import { ConceptPlaceUncheckedCreateNestedManyWithoutUserInputSchema } from './ConceptPlaceUncheckedCreateNestedManyWithoutUserInputSchema';
import { ConceptThingUncheckedCreateNestedManyWithoutUserInputSchema } from './ConceptThingUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPersonInput> = z.object({
  id: z.string().optional(),
  faceMeshId: z.string().optional().nullable(),
  name: z.string(),
  nickname: z.string().optional().nullable(),
  birthdate: z.coerce.date(),
  sex: z.lazy(() => SexSchema),
  gender: z.lazy(() => GenderSchema),
  genderPronounSingluar: z.string(),
  genderPronounPlural: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  families: z.lazy(() => FamilyUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  things: z.lazy(() => ConceptThingUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutPersonInputSchema;
