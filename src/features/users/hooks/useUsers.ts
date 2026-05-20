import { useUsersQuery } from '../queries/users.query'

export function useUsers() {
  const query = useUsersQuery()

  return {
    users: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
  }
}
