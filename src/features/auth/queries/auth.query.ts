import { useQuery } from '@tanstack/react-query'

export function useCurrentUser() {
  return useQuery({
    queryKey: ['auth', 'currentUser'],
    queryFn: async () => {
      return null as null
    },
    staleTime: 1000 * 60 * 5,
  })
}
