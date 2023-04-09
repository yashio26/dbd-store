import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

const AccountData = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>Mi cuenta</h1>
      <div>
        <h2>Compras</h2>
        <Link to={'/datos/compras'}>Ver mis compras</Link>
      </div>
      <div>
        <h2>Información de la cuenta</h2>
        <p>Usuario: {user.usuario}</p>
        <p>Nombre: {user.nombre}</p>
        <p>Email: {user.email}</p>
      </div>
    </>
  );
};

export default AccountData;
