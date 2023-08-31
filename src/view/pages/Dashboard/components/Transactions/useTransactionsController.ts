import { useDashboard } from '../../DashboardContext/useDashboardContext';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  return { areValuesVisible };
}
