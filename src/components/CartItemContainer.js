import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartItem from './CartItem';

const CartItemContainer = ({ info, classname }) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const deleteProduct = () => {
    const deleteProductInCart = carrito.filter((el) => el.id !== info.id);
    setCarrito(deleteProductInCart);
    sessionStorage.setItem('carrito', JSON.stringify(deleteProductInCart));
    console.log(deleteProductInCart);
  };

  return (
    <>
      <CartItem
        info={info}
        classname={classname}
        deleteProduct={deleteProduct}
      />
    </>
  );
};

export default CartItemContainer;
