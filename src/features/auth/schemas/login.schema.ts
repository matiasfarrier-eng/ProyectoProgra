import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Debe ser un correo válido' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
})

export type LoginSchema = z.infer<typeof loginSchema>
