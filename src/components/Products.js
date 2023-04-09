import React from 'react';
import CardContainer from './CardContainer';

const Products = ({ categoria, capitalizeWord, productos }) => {
  return (
    <div>
      {!categoria ? <h1>Productos</h1> : <h1>{capitalizeWord(categoria)}</h1>}
      {productos.length > 0 ? (
        productos.map((card) => <CardContainer key={card.id} info={card} />)
      ) : (
        <p>no hay cards</p>
      )}
    </div>
  );
};

export default Products;
