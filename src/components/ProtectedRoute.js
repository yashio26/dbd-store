import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, isAuth }) => {
  if (!user && !isAuth) {
    return <Navigate to="inicio-sesion" />;
  } else if (user && isAuth) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
