import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'gray' }}>
        <h1>Inicio de sesión</h1>
        <label>Usuario</label>
        <input />
        <hr />
        <label>Contraseña</label>
        <input />
        <hr />
        <button>Iniciar sesión</button>
        <hr />
      </div>
      <Link to={'/registro'}>¿No estás registrado?</Link>
    </div>
  );
};

export default Login;
