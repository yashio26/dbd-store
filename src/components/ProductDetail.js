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
          <section className="descripcion-producto">
            <p>{producto.descripcion}</p>
          </section>
          {producto.stock < 1 ? (
            <p>No quedan unidades.</p>
          ) : (
            <>
              <section>
                <p>${producto.precio}</p>
              </section>
              <section>
                <p>{producto.stock} unidades disponibles.</p>
              </section>
              <section className="botones-manejo-stock">
                <button onClick={subtractQuantity}>-</button>
                <p>
                  {counter} x ${producto.precio}
                </p>
                <button onClick={addQuantity}>+</button>
              </section>
              <section>
                <p>
                  <strong>Total: ${counter * producto.precio}</strong>
                </p>
              </section>
              <section className="boton-agregar-producto">
                <button onClick={addProduct}>Agregar al carrito</button>
              </section>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
