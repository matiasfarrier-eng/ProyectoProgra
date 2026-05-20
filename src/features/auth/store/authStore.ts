import { create } from 'zustand'
import type { AuthTokens, CurrentUser } from '../types/auth.types'

interface AuthState {
  user: CurrentUser | null
  tokens: AuthTokens | null
  setAuth: (tokens: AuthTokens, user: CurrentUser) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  tokens: null,
  setAuth: (tokens, user) => set({ tokens, user }),
  clearAuth: () => set({ tokens: null, user: null }),
}))
