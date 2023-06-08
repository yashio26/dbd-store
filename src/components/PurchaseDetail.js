import React from 'react';
import PurchasedItem from './PurchasedItem';

const PurchaseDetail = ({ id, detalle }) => {
  return (
    <div>
      <h1>Compra</h1>
      <p>N° de compra: {id}</p>
      <div className="purchased-item-container">
        {detalle
          ? detalle.productos.map((el) => (
              <PurchasedItem key={el.id} product={el} />
            ))
          : 'Esperando datos...'}
      </div>
    </div>
  );
};

export default PurchaseDetail;
