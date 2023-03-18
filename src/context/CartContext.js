import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const [precioTotal, setPrecioTotal] = useState(0);

  const [compra, setCompra] = useState(null);

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem('carrito'));
    if (cart) {
      setCarrito(cart);
    }
  }, []);

  const calculoPrecioTotal = () => {
    let precio = 0;
    carrito.map((el) => {
      console.log(el.total);
      return (precio = precio + el.total);
    });
    setPrecioTotal(precio);
  };

  const data = {
    carrito,
    setCarrito,
    precioTotal,
    calculoPrecioTotal,
    compra,
    setCompra,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
