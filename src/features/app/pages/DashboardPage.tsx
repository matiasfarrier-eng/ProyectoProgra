import FeatureCard from '@shared/components/FeatureCard'
import Button from '@shared/ui/Button'

const featureCards = [
  {
    title: 'Authentication',
    description: 'Centraliza el flujo de autenticación y los estados de sesión.',
    href: '/login',
  },
  {
    title: 'Usuarios',
    description: 'Administración de usuarios con esquemas, servicios y tablas tipadas.',
    href: '/users',
  },
  {
    title: 'Productos',
    description: 'Consultas, tablas y componentes reutilizables para catálogo empresarial.',
    href: '/products',
  },
]

export default function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10 sm:px-8">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Arquitectura híbrida</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">Plantilla frontend empresarial</h1>
        <p className="max-w-2xl text-slate-300">
          Estructura basada en Features, capas limpias y providers modulares para permitir onboarding rápido y escalabilidad.
        </p>
        <Button asChild>
          <a href="/users">Abrir módulo de usuarios</a>
        </Button>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {featureCards.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} description={feature.description} href={feature.href} />
        ))}
      </section>
    </main>
  )
}
