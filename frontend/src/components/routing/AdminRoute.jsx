import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminRoute() {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user?.role === 'admin';
  return isAdmin ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
