import FeatureShell from '@shared/layouts/FeatureShell'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  return (
    <FeatureShell
      title="Iniciar sesión"
      description="Ejemplo de módulo de autenticación con formularios tipados, validación Zod y mutaciones con React Query."
    >
      <div className="max-w-xl rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-soft">
        <LoginForm />
      </div>
    </FeatureShell>
  )
}
