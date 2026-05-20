import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Button from '@shared/ui/Button'
import { loginSchema, type LoginSchema } from '../schemas/login.schema'
import { useAuth } from '../hooks/useAuth'

export default function LoginForm() {
  const { login, isLoading, error } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) })

  async function onSubmit(values: LoginSchema) {
    await login(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-2">
        <label className="text-sm text-slate-200" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-500"
        />
        {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-slate-200" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-500"
        />
        {errors.password && <p className="text-sm text-rose-400">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Validando...' : 'Ingresar'}
      </Button>
      {error instanceof Error && <p className="text-sm text-rose-400">{error.message}</p>}
    </form>
  )
}
