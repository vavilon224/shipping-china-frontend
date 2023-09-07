import {Navigate} from 'react-router-dom';
import {loadFromLocalStorage} from "../utils/localStorage";

export function RequireAuth({ children }) {
  const auth =  loadFromLocalStorage('accessToken', false);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return children;
}
