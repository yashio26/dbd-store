import React from 'react';
import { Link } from 'react-router-dom';

const Datos = () => {
  return (
    <div>
      <h1>Datos</h1>
      <Link to={'/datos/compras'}>Ver mis compras</Link>
    </div>
  );
};

export default Datos;
