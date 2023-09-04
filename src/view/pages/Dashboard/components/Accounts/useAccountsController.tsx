import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useDashboard } from '../../DashboardContext/useDashboardContext';
import { useQuery } from '@tanstack/react-query';
import { httpClient } from '../../../../../app/services/httpClient';

export function useAccountsController() {
  const { areValuesVisible, toggleValuesVisibility } = useDashboard();
  const { data, isLoading } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: async () => {
      const { data } = await httpClient('/bank-accounts');

      return data;
    },
  });
  const windowWidth = useWindowWidth();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  return {
    sliderState,
    setSliderState,
    windowWidth,
    toggleValuesVisibility,
    areValuesVisible,
    isLoading,
    accounts: data,
  };
}
