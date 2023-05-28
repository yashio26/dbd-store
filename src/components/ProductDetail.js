import React from 'react';
import '../styles/productDetail.css';

const ProductDetail = ({
  producto,
  counter,
  addQuantity,
  subtractQuantity,
  addProduct,
}) => {
  return (
    <>
      <div className="product-detail">
        <section className="product-detail__img">
          <img src={producto.img} alt={producto.producto} />
        </section>
        <section className="product-detail__data">
          <h1>{producto.producto}</h1>
          <p>{producto.descripcion}</p>
          {producto.stock < 1 ? (
            <p>No quedan unidades.</p>
          ) : (
            <>
              <p>${producto.precio}</p>
              <p>{producto.stock} unidades disponibles.</p>
              <section>
                <button onClick={addQuantity}>+</button>
                <p>
                  {counter} x ${producto.precio}
                </p>
                <button onClick={subtractQuantity}>-</button>
              </section>
              <p>
                <strong>Total: ${counter * producto.precio}</strong>
              </p>
              <button onClick={addProduct}>Agregar al carrito</button>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
