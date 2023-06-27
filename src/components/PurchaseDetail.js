import React from 'react';
import PurchasedDetailItem from './PurchasedDetailItem';
import '../styles/purchaseDetail.css';

const PurchaseDetail = ({ id, detalle }) => {
  return (
    <>
      <h1>Compra</h1>
      <div className="purchase-detail">
        {detalle ? (
          <>
            <h3>
              N° de compra: <strong>{id}</strong>
            </h3>
            <div className="purchased-detail-item-container">
              <h2>Productos</h2>
              {detalle
                ? detalle.productos.map((el) => (
                    <PurchasedDetailItem
                      key={el.id}
                      product={el}
                      info={detalle}
                    />
                  ))
                : 'Esperando datos...'}
            </div>
            <h3>Fecha de compra: {detalle.fecha.toLocaleString()}</h3>
          </>
        ) : (
          <p>Recuperando datos...</p>
        )}
      </div>
    </>
  );
};

export default PurchaseDetail;
