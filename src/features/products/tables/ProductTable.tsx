import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type { Product } from '../types/product.types'
import { formatCurrency } from '@shared/utils/formatters'

interface ProductTableProps {
  data: Product[]
}

const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.accessor('name', {
    header: 'Nombre',
  }),
  columnHelper.accessor('category', {
    header: 'Categoría',
  }),
  columnHelper.accessor('price', {
    header: 'Precio',
    cell: (info) => formatCurrency(info.getValue()),
  }),
  columnHelper.accessor('stock', {
    header: 'Inventario',
  }),
]

export default function ProductTable({ data }: ProductTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-soft">
      <table className="min-w-full divide-y divide-slate-800 text-left text-slate-200">
        <thead className="bg-slate-900/90">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-slate-800 bg-slate-950">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-4 text-sm text-slate-200">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
