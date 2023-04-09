import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ handleSubmit, login, handleChange }) => {
  return (
    <div>
      <div style={{ backgroundColor: 'gray' }}>
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input
            required
            type="text"
            name="usuario"
            value={login.usuario}
            onChange={handleChange}
          />
          <hr />
          <label>Contraseña</label>
          <input
            required
            type="password"
            name="contraseña"
            value={login.contraseña}
            onChange={handleChange}
          />
          <hr />
          <button>Iniciar sesión</button>
          <hr />
        </form>
      </div>
      <Link to={'/registro'}>¿No estás registrado?</Link>
    </div>
  );
};

export default Login;
