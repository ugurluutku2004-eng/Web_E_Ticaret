import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isAuthed = false;
  return isAuthed ? <Outlet /> : <Navigate to="/login" replace />;
}
