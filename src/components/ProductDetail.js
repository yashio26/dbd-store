import React from 'react';

const ProductDetail = ({
  producto,
  counter,
  addQuantity,
  subtractQuantity,
  addProduct,
}) => {
  return (
    <div>
      <h1>{producto.producto}</h1>
      <img src={producto.img} alt={producto.producto} />
      {producto.stock < 1 ? (
        <p>No quedan unidades.</p>
      ) : (
        <>
          <p>{producto.stock} unidades disponibles.</p>
          <p>
            Total: {counter}*{producto.precio}
          </p>
          <div>
            <button onClick={addQuantity}>+</button>
            <p>{counter}</p>
            <button onClick={subtractQuantity}>-</button>
          </div>
          <button onClick={addProduct}>agregar producto</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
