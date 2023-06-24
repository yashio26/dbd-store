import React from 'react';
import '../styles/purchasedDetailItem.css';

const PurchasedDetailItem = ({ product }) => {
  return (
    <section className="purchased-item">
      <div className="">
        <h3>{product.producto}</h3>
      </div>
      <div>
        <p>Cantidad: {product.cantidad}</p>
      </div>
      <div>
        <p>
          <strong>Total: ${product.total}</strong>
        </p>
      </div>
      <div>
        <img src={product.img} alt={`img-${product.producto}`} />
      </div>
    </section>
  );
};

export default PurchasedDetailItem;
