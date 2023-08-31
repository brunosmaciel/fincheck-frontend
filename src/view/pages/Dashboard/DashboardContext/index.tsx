import { ReactNode, createContext, useCallback, useState } from 'react';

interface IDashboardContextProps {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
}

export const DashboardContext = createContext({} as IDashboardContextProps);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(
    JSON.parse(localStorage.getItem('areValuesVisible') || 'true') as boolean,
  );
  console.log(areValuesVisible);
  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prev) => {
      localStorage.setItem('areValuesVisible', String(!prev));
      return !prev;
    });
  }, []);
  return (
    <DashboardContext.Provider
      value={{ areValuesVisible, toggleValuesVisibility }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
