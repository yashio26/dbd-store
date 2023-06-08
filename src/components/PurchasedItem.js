import React from 'react';
import '../styles/purchasedItem.css';

const PurchasedItem = ({ product }) => {
  return (
    <section className="purchased-item">
      <h3>{product.producto}</h3>
      <p>Cantidad: {product.cantidad}</p>
      <p>
        <strong>Total: ${product.total}</strong>
      </p>
      <img src={product.img} alt={`img-${product.producto}`} />
    </section>
  );
};

export default PurchasedItem;
