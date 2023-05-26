import React from 'react';
import CardContainer from './CardContainer';
import '../styles/products.css';

const Products = ({ categoria, capitalizeWord, productos }) => {
  return (
    <div className="productss">
      {!categoria ? <h1>Productos</h1> : <h1>{capitalizeWord(categoria)}</h1>}
      <div>
        <section className="products__filter">menu xd</section>
        <section className="products__card">
          <input />
          <div>
            {productos.length > 0 ? (
              productos.map((card) => (
                <CardContainer key={card.id} info={card} />
              ))
            ) : (
              <p>no hay cards</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
