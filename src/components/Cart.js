import React from 'react';
import CartItemContainer from './CartItemContainer';

const Cart = ({ carrito, precioTotal, handleClick, cleanCart }) => {
  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <>
          {carrito.map((carro) => (
            <CartItemContainer key={carro.id} info={carro} />
          ))}
          <h2>{precioTotal}</h2>
          <input type="button" onClick={handleClick} value="Comprar" />
          <input type="button" onClick={cleanCart} value="Limpiar carrito" />
        </>
      ) : (
        <h1>No hay ningun producto</h1>
      )}
    </div>
  );
};

export default Cart;
