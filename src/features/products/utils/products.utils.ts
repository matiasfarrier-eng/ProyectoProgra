import type { Product } from '../types/product.types'

export function formatProductLabel(product: Product) {
  return `${product.name} • ${product.category}`
}
