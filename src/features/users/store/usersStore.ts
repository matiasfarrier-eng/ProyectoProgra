import { create } from 'zustand'
import type { User } from '../types/user.types'

interface UsersState {
  users: User[]
  setUsers: (users: User[]) => void
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}))
