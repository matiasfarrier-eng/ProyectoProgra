export interface LoginFormValues {
  email: string
  password: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface CurrentUser {
  id: string
  name: string
  email: string
}
