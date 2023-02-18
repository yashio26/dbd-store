import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="Link">
        <h1>DBDStore</h1>
      </Link>
      <div>
        <input placeholder="buscador"></input>
        <Link to={'/inicio-sesion'}>
          <p>Mi cuenta</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
