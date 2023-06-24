import React from 'react';
import '../styles/purchases.css';
import ItemsPurchased from './ItemsPurchased';

const Purchases = ({ comprasHechas }) => {
  return (
    <div className="purchases">
      <h1>Compras</h1>
      {comprasHechas ? (
        comprasHechas.map((el) => {
          return <ItemsPurchased key={el.id} info={el} />;
        })
      ) : (
        <h2>No hay compras</h2>
      )}
    </div>
  );
};

export default Purchases;
