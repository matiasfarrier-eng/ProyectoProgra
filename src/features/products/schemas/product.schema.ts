import { z } from 'zod'

export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  category: z.string(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
})

export type ProductSchema = z.infer<typeof productSchema>
