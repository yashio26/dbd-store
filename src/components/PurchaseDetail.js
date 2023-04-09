import React from 'react';

const PurchaseDetail = ({ id, detalle }) => {
  return (
    <div>
      <h1>Compra</h1>
      <p>N° de compra: {id}</p>
      {detalle
        ? detalle.productos.map((el) => (
            <div key={el.id}>
              <p>Producto: {el.producto}</p>
              <p>Categoria: {el.categoria}</p>
              <p>
                Cantidad: {el.cantidad} (x ${el.precio})
              </p>
              <img src={el.img} alt={`img-${el.producto}`} />
              <p>Total: ${el.total}</p>
            </div>
          ))
        : 'Esperando datos...'}
    </div>
  );
};

export default PurchaseDetail;
