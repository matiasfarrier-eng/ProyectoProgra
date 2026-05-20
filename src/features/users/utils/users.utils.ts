import type { User } from '../types/user.types'

export function formatUserName(user: User) {
  return `${user.firstName} ${user.lastName}`
}
