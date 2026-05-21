import type { User } from '../types/user.types'

const mockUsers: User[] = [
  { id: 'u1', firstName: 'Ana', lastName: 'Pérez', email: 'ana.perez@example.com', role: 'admin' },
  { id: 'u2', firstName: 'Diego', lastName: 'Ramos', email: 'diego.ramos@example.com', role: 'editor' },
  { id: 'u3', firstName: 'Lucía', lastName: 'Martínez', email: 'lucia.martinez@example.com', role: 'viewer' },
  { id: 'u4', firstName: 'Carlos', lastName: 'González', email: 'carlos.gonzalez@example.com', role: 'editor' },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchUsers(): Promise<User[]> {
  await delay(250)
  return mockUsers
}
