import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { localStorageKeys } from '../config/localStorageKeys';
import { useQuery } from '@tanstack/react-query';
import { usersService } from '../services/usersService';

import { toast } from 'react-hot-toast';
import { LaunchScreen } from '../../view/components/LaunchScreen';

interface IAuthContext {
  isSignedIn: boolean;
  signin: (accessToken: string) => void;
  signout: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess, remove } = useQuery({
    queryFn: () => usersService.me(),
    queryKey: ['users', 'me'],
    enabled: isSignedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setIsSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove();
    setIsSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou');
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: isSuccess && isSignedIn,
        signin,
        signout,
      }}
    >
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
