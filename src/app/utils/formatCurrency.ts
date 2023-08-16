export function formatCurrency(number: number) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}
