import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const data = { carrito, setCarrito };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
