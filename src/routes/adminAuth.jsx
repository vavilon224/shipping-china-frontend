import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function RequireAdminAuth({ children }) {
  const isAdmin = useSelector((state) => state.userData.role);

  if (isAdmin !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
}
