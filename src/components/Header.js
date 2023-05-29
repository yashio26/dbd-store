import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, login, search, handleChange, handleSubmit }) => {
  return (
    <div className="header">
      <Link to="/" className="Link">
        <h1>DBDStore</h1>
      </Link>
      {user && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="buscador"
              value={search}
              onChange={handleChange}
              className="header-search"
            />
          </form>
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
      )}
      <input
        type="button"
        onClick={login}
        value={!!user ? 'Logout' : 'Login'}
      />
    </div>
  );
};

export default Header;
