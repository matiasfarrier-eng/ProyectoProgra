import type { Product } from '../types/product.types'

const mockProducts: Product[] = [
  { id: 'p1', name: 'Monitor 27"', category: 'Periféricos', price: 329.99, stock: 18 },
  { id: 'p2', name: 'Teclado mecánico', category: 'Periféricos', price: 119.99, stock: 34 },
  { id: 'p3', name: 'Laptop Ultraligera', category: 'Portátiles', price: 1249.0, stock: 8 },
  { id: 'p4', name: 'Auriculares con cancelación', category: 'Audio', price: 89.5, stock: 26 },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchProducts(): Promise<Product[]> {
  await delay(250)
  return mockProducts
}
