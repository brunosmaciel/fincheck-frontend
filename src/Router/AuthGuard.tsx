import { Navigate, Outlet } from "react-router-dom";

interface IAuthGuardProps {
  isPrivate: boolean;
}
export function AuthGuard({ isPrivate }: IAuthGuardProps) {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    <Navigate to="/" replace />;
  }
  return <Outlet />;
}
