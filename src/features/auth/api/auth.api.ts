import { ApiRoutes } from '@config/api'

export const authApi = {
  login: `${ApiRoutes.auth}/login`,
  refresh: `${ApiRoutes.auth}/refresh`,
  logout: `${ApiRoutes.auth}/logout`,
}
