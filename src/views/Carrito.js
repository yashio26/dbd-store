import React, { useContext, useEffect } from 'react';
import CartItem from '../components/CartItem';
import CartContext from '../context/CartContext';

const Carrito = () => {
  const { carrito, precioTotal, calculoPrecioTotal, compra, setCompra } =
    useContext(CartContext);

  useEffect(() => {
    calculoPrecioTotal();
  }, [calculoPrecioTotal]);

  const handleClick = () => {
    setCompra(carrito);
  };

  console.log(compra);

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <>
          {carrito.map((carro) => (
            <CartItem key={carro.id} info={carro} />
          ))}
          <h2>{precioTotal}</h2>
          <input type="button" onClick={handleClick} value="Comprar" />
        </>
      ) : (
        <h1>No hay ningun producto</h1>
      )}
    </div>
  );
};

export default Carrito;
