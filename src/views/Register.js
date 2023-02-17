import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Registro</h1>
      <div style={{ backgroundColor: 'gray' }}>
        <label>Nombre</label>
        <input></input>
        <hr />
        <label>Correo electronico</label>
        <input></input>
        <hr />
        <label>Nombre de usuario</label>
        <input></input>
        <hr />
        <label>Contraseña</label>
        <input></input>
        <hr />
        <label>Confirmar contraseña</label>
        <input></input>
        <button>Registrarse</button>
      </div>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <Link to={'/inicio-sesion'}>Inicia sesión aquí.</Link>
      </p>
    </div>
  );
};

export default Register;
