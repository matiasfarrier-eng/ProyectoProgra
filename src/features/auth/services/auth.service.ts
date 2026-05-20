import { apiClient } from '@shared/services/apiClient'
import { authApi } from '../api/auth.api'
import type { AuthTokens, LoginFormValues } from '../types/auth.types'

export async function login(payload: LoginFormValues): Promise<AuthTokens> {
  const response = await apiClient.post<AuthTokens>(authApi.login, payload)
  return response.data
}

export async function logout(): Promise<void> {
  await apiClient.post(authApi.logout)
}
