import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutEditionInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutEditionInputObjectSchema = Schema
