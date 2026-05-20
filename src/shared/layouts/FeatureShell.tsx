import type { ReactNode } from 'react'

interface FeatureShellProps {
  title: string
  description: string
  children: ReactNode
}

export default function FeatureShell({ title, description, children }: FeatureShellProps) {
  return (
    <section className="mx-auto min-h-screen max-w-6xl px-6 py-10 sm:px-8">
      <header className="mb-8 space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Módulo</p>
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="max-w-2xl text-slate-300">{description}</p>
      </header>
      <div className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-soft">
        {children}
      </div>
    </section>
  )
}
