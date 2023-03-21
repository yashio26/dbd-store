import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../context/UserContext';

const ProtectedRoute = ({ isAuth, isAdmin, isUser }) => {
  const { user, setUser } = useContext(UserContext);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem('usuario'));
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
  } else if (user && isAdmin === user.rol && !isUser) {
    console.log('retorna admin');
    return <Outlet />;
  } else if (user && isAdmin !== user.rol && !isUser) {
    console.log('isAdmin es:', isAdmin, 'user.rol es: ', user.rol);
    return <Navigate to="/" />;
  } else {
    console.log('retorna outlet');
    return <Outlet />;
  }
};

export default ProtectedRoute;
