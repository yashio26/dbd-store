import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';

const Header = () => {
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
    <div className="Header">
      <Link to="/" className="Link">
        <h1>DBDStore</h1>
      </Link>
      <div>
        <input placeholder="buscador"></input>
        {user ? (
          <Link to={'/datos'}>
            <p>Mi cuenta</p>
          </Link>
        ) : (
          <Link to={'/inicio-sesion'}>
            <p>Mi cuenta</p>
          </Link>
        )}
        <input
          type="button"
          onClick={login}
          value={!!user ? 'Logout' : 'Login'}
        />
      </div>
    </div>
  );
};

export default Header;
