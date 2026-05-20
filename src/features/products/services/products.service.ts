import { apiClient } from '@shared/services/apiClient'
import { productsApi } from '../api/products.api'
import type { Product } from '../types/product.types'

export async function fetchProducts(): Promise<Product[]> {
  const response = await apiClient.get<Product[]>(productsApi.list)
  return response.data
}
