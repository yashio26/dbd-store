import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

const Register = ({ handleSubmit, handleChange, register, error }) => {
  return (
    <div className="registerr">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit} className="register__form">
        <label>Nombre</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="nombre"
          value={register.nombre}
        />
        <label>Correo electronico</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={register.email}
        />
        <label>Nombre de usuario</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="usuario"
          value={register.usuario}
        />
        {error ? <p>Nombre de usuario en uso.</p> : null}
        <label>Contraseña</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="contraseña"
          value={register.contraseña}
        />
        {/* <label>Confirmar contraseña</label>
<input /> */}
        <button>Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <Link to={'/inicio-sesion'}>Inicia sesión aquí.</Link>
      </p>
    </div>
  );
};

export default Register;
