import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SexSchema } from './SexSchema';
import { GenderSchema } from './GenderSchema';
import { FaceMeshCreateNestedOneWithoutUserInputSchema } from './FaceMeshCreateNestedOneWithoutUserInputSchema';
import { ConceptPersonCreateNestedOneWithoutUserInputSchema } from './ConceptPersonCreateNestedOneWithoutUserInputSchema';
import { ConceptPlaceCreateNestedManyWithoutUserInputSchema } from './ConceptPlaceCreateNestedManyWithoutUserInputSchema';
import { ConceptThingCreateNestedManyWithoutUserInputSchema } from './ConceptThingCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutFamiliesInputSchema: z.ZodType<Prisma.UserCreateWithoutFamiliesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  nickname: z.string().optional().nullable(),
  birthdate: z.coerce.date(),
  sex: z.lazy(() => SexSchema),
  gender: z.lazy(() => GenderSchema),
  genderPronounSingluar: z.string(),
  genderPronounPlural: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  face: z.lazy(() => FaceMeshCreateNestedOneWithoutUserInputSchema).optional(),
  person: z.lazy(() => ConceptPersonCreateNestedOneWithoutUserInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceCreateNestedManyWithoutUserInputSchema).optional(),
  things: z.lazy(() => ConceptThingCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutFamiliesInputSchema;
