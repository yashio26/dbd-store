import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/itemsPurchased.css';

const ItemsPurchased = ({ info }) => {
  return (
    <div className="item-purchased">
      <h3>N° de compra: {info.id}</h3>
      <h3>Fecha: {info.fecha.toLocaleString()}</h3>
      <Link to={`/datos/compra/${info.id}`}>
        <button>Ver compra</button>
      </Link>
    </div>
  );
};

export default ItemsPurchased;
