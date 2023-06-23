import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/accountData.css';

const AccountData = ({ user }) => {
  console.log(user);
  return (
    <>
      <h1>Mi cuenta</h1>
      <section className="account-data">
        <div className="account-data-info">
          <h2>Información de la cuenta</h2>
          <p>Usuario: {user.usuario}</p>
          <p>Nombre: {user.nombre}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="account-data-purchases">
          <h2>Compras</h2>
          <Link to={'/datos/compras'}>Ver mis compras</Link>
        </div>
      </section>
    </>
  );
};

export default AccountData;
