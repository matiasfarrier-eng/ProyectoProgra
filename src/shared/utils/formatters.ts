export function formatCurrency(value: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}

export function formatUserName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`
}
