import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const isAuthed = Boolean(token);
  return isAuthed ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
