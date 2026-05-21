import type { AuthTokens, LoginFormValues } from '../types/auth.types'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function login(payload: LoginFormValues): Promise<AuthTokens> {
  await delay(300)

  if (!payload.email.includes('@') || payload.password.length < 8) {
    throw new Error('Correo o contraseña inválidos')
  }

  return {
    accessToken: 'mock-access-token',
    refreshToken: 'mock-refresh-token',
  }
}

export async function logout(): Promise<void> {
  await delay(150)
}
