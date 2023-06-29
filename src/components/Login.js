import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = ({ handleSubmit, login, handleChange }) => {
  return (
    <div className="login">
      <h1>Inicio de sesión</h1>
      <div>
        <form onSubmit={handleSubmit} className="login__form">
          <label>Usuario</label>
          <input
            required
            type="text"
            name="usuario"
            value={login.usuario}
            onChange={handleChange}
          />
          <label>Contraseña</label>
          <input
            required
            type="password"
            name="contraseña"
            value={login.contraseña}
            onChange={handleChange}
          />
          <button>Iniciar sesión</button>
        </form>
      </div>
      <Link to={'/registro'}>¿No estás registrado?</Link>
    </div>
  );
};

export default Login;
