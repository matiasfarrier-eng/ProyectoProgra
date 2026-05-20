import { z } from 'zod'

export const userSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  role: z.union([z.literal('admin'), z.literal('editor'), z.literal('viewer')]),
})

export type UserSchema = z.infer<typeof userSchema>
