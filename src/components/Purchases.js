import React from 'react';
import { Link } from 'react-router-dom';

const Purchases = ({ comprasHechas }) => {
  return (
    <div>
      <h1>Compras</h1>
      {comprasHechas ? (
        comprasHechas.map((el) => {
          return (
            <div
              key={el.id}
              style={{ border: '2px solid white', margin: '5px' }}
            >
              {el.productos.map((prod) => {
                return (
                  <div key={prod.id}>
                    <h1>{prod.producto}</h1>
                  </div>
                );
              })}
              <h2>{el.fecha.toLocaleString()}</h2>
              <Link to={`/datos/compra/${el.id}`}>
                <button>Ver compra</button>
              </Link>
            </div>
          );
        })
      ) : (
        <h2>No hay compras</h2>
      )}
    </div>
  );
};

export default Purchases;
