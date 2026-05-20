import { useMutation } from '@tanstack/react-query'
import { login, logout } from '../services/auth.service'
import { useAuthStore } from '../store/authStore'
import type { LoginFormValues } from '../types/auth.types'

export function useAuth() {
  const { setAuth, clearAuth, tokens, user } = useAuthStore()

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginFormValues) => login(credentials),
    onSuccess: (tokens) => {
      setAuth(tokens, { id: 'unknown', name: 'Usuario', email: 'user@enterprise.local' })
    },
  })

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearAuth()
    },
  })

  return {
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoading: loginMutation.status === 'pending' || logoutMutation.status === 'pending',
    error: loginMutation.error ?? logoutMutation.error,
    isAuthenticated: Boolean(tokens),
    user,
  }
}
