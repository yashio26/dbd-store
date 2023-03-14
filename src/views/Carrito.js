import React, { useContext, useEffect } from 'react';
import CartItem from '../components/CartItem';
import CartContext from '../context/CartContext';

const Carrito = () => {
  const { carrito, precioTotal, calculoPrecioTotal } = useContext(CartContext);

  useEffect(() => {
    calculoPrecioTotal();
  }, [calculoPrecioTotal]);

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <>
          {carrito.map((carro) => (
            <CartItem key={carro.id} info={carro} />
          ))}
          <h2>{precioTotal}</h2>
        </>
      ) : (
        <h1>No hay ningun producto</h1>
      )}
    </div>
  );
};

export default Carrito;
