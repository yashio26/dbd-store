import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';

const initialRegister = {
  nombre: '',
  email: '',
  usuario: '',
  contraseña: '',
};

const Register = () => {
  const [register, setRegister] = useState(initialRegister);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegister({ ...register, [name]: value });
  };
  console.log(register);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'usuarios'), {
      ...register,
    });
    /* setContacto(docRef); */
    setRegister(initialRegister);
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: 'gray' }}>
        <label>Nombre</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="nombre"
          value={register.nombre}
        />
        <hr />
        <label>Correo electronico</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={register.email}
        />
        <hr />
        <label>Nombre de usuario</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="usuario"
          value={register.usuario}
        />
        <hr />
        <label>Contraseña</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="contraseña"
          value={register.contraseña}
        />
        <hr />
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
