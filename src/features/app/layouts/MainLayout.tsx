import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 shadow-sm backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link className="text-xl font-semibold text-white" to="/">
            EnterpriseShell
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <Link className="transition hover:text-white" to="/users">
              Usuarios
            </Link>
            <Link className="transition hover:text-white" to="/products">
              Productos
            </Link>
            <Link className="transition hover:text-white" to="/login">
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <Outlet />
      </main>
    </div>
  )
}
