import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../context/UserContext';

const ProtectedRoute = ({ isAuth }) => {
  const { user } = useContext(UserContext);

  if (!user && !isAuth) {
    return <Navigate to="inicio-sesion" />;
  } else if (user && isAuth) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
