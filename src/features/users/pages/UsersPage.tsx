import FeatureShell from '@shared/layouts/FeatureShell'
import UserCard from '../components/UserCard'
import { useUsers } from '../hooks/useUsers'

export default function UsersPage() {
  const { users, isLoading } = useUsers()

  return (
    <FeatureShell
      title="Gestión de usuarios"
      description="Capa de usuarios con hooks de consulta, store local y componentes tipados."
    >
      <div className="grid gap-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <p className="text-sm text-slate-400">
            El módulo de usuarios utiliza React Query para mantener el caché consistente y la carga reactiva.
          </p>
        </div>
        {isLoading ? (
          <p className="text-slate-300">Cargando usuarios...</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </FeatureShell>
  )
}
