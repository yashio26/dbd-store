import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../context/UserContext';

const ProtectedRoute = ({ isAuth }) => {
  const { user, setUser } = useContext(UserContext);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem('usuario');
    if (session) {
      console.log('hay datos en session');
      setUser(session);
    } else console.log('no hay datos en session');

    setUserLoaded(true);
  }, [setUser]);

  if (!userLoaded) {
    return <div>Loading...</div>;
  }

  if (!user && !isAuth) {
    console.log('navega a inicio-sesion, user', user);
    return <Navigate to="inicio-sesion" />;
  } else if (user && isAuth) {
    console.log('navega a home');
    return <Navigate to="/" />;
  } else {
    console.log('retorna outlet');
    return <Outlet />;
  }
};

export default ProtectedRoute;
