import { Navigate, Outlet } from 'react-router';
import { useUser } from '../../context/UserContext';
import type { UserContextValue } from '../../types';

const ProtectedRoute = () => {
  const user = useUser() as UserContextValue;
  if (!user.current) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;