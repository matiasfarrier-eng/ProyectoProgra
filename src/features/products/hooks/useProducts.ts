import { useProductsQuery } from '../queries/products.query'

export function useProducts() {
  const query = useProductsQuery()

  return {
    products: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
  }
}
