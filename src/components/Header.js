import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, login }) => {
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
