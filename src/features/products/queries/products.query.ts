import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../services/products.service'

export function useProductsQuery() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 2,
  })
}
