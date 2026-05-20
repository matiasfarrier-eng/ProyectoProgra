import FeatureShell from '@shared/layouts/FeatureShell'
import ProductTable from '../tables/ProductTable'
import { useProducts } from '../hooks/useProducts'

export default function ProductsPage() {
  const { products, isLoading } = useProducts()

  return (
    <FeatureShell
      title="Catálogo de productos"
      description="Ejemplo de módulo de producto con tabla tipada usando TanStack Table y consulta de API."
    >
      <div className="grid gap-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <p className="text-sm text-slate-400">
            La capa de producto está separada en servicios, queries y componentes independientes para facilitar su evolución.
          </p>
        </div>
        {isLoading ? (
          <p className="text-slate-300">Cargando productos...</p>
        ) : (
          <ProductTable data={products} />
        )}
      </div>
    </FeatureShell>
  )
}
