import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import CartContext from '../context/CartContext';

const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        carrito.map((carro) => <CartItem info={carro} />)
      ) : (
        <h1>No hay ningun producto</h1>
      )}
    </div>
  );
};

export default Carrito;
