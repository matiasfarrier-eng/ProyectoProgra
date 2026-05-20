import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../services/users.service'

export function useUsersQuery() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 2,
  })
}
