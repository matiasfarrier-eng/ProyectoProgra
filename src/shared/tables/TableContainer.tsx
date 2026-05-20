import type { ReactNode } from 'react'

interface TableContainerProps {
  children: ReactNode
}

export default function TableContainer({ children }: TableContainerProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-soft">
      {children}
    </div>
  )
}
