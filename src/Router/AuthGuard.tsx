import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/contexts/AuthContext';

interface IAuthGuardProps {
  isPrivate: boolean;
}
export function AuthGuard({ isPrivate }: IAuthGuardProps) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (isSignedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
