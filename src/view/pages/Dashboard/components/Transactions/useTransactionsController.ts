import { useDashboard } from '../../DashboardContext/useDashboardContext';
const transacionsMock = [
  {
    type: 'expense',
    name: 'Almoço',
    value: 24,
    date: '22/02/2023',
  },
  {
    type: 'income',
    name: 'Salario',
    value: 1679.2,
    date: '22/02/2023',
  },
];
export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  return {
    areValuesVisible,
    isInitialLoading: false,
    transactions: [],
    isLoading: false,
  };
}
