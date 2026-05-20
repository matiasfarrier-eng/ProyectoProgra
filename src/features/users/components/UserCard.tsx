import type { User } from '../types/user.types'
import { formatUserName } from '../utils/users.utils'

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-white">{formatUserName(user)}</h3>
      <p className="mt-2 text-sm text-slate-400">{user.email}</p>
      <span className="mt-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
        {user.role}
      </span>
    </article>
  )
}
