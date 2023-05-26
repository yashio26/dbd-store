import React from 'react';
import '../styles/card.css';

const Card = ({ img, producto, handleClick }) => {
  return (
    <section className="card">
      <img src={img} alt="product-img" />
      <p>{producto}</p>
      <button onClick={handleClick}>Ver detalles</button>
    </section>
  );
};

export default Card;
