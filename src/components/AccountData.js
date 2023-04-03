import React from 'react';
import { Link } from 'react-router-dom';

const AccountData = () => {
  return (
    <>
      <h1>Datos</h1>
      <Link to={'/datos/compras'}>Ver mis compras</Link>
    </>
  );
};

export default AccountData;
