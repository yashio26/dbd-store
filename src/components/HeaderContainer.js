import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';
import Header from './Header';

const HeaderContainer = () => {
  const { user, setUser } = useContext(UserContext);
  const { setCarrito } = useContext(CartContext);

  const login = () => {
    if (!!user) {
      sessionStorage.removeItem('carrito');
      sessionStorage.removeItem('usuario');
      setCarrito([]);
      setUser(null);
    } else setUser(true);
  };

  return (
    <>
      <Header user={user} login={login} />
    </>
  );
};

export default HeaderContainer;
