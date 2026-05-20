import { apiClient } from '@shared/services/apiClient'
import { usersApi } from '../api/users.api'
import type { User } from '../types/user.types'

export async function fetchUsers(): Promise<User[]> {
  const response = await apiClient.get<User[]>(usersApi.list)
  return response.data
}
