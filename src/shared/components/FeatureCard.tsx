import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FeatureCardProps {
  title: string
  description: string
  href: string
}

export default function FeatureCard({ title, description, href }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300" to={href}>
        Ver módulo
      </Link>
    </article>
  )
}
