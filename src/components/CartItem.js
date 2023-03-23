import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const CartItem = ({ info }) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const deleteProduct = () => {
    const deleteProductInCart = carrito.filter((el) => el.id !== info.id);
    setCarrito(deleteProductInCart);
    sessionStorage.setItem('carrito', JSON.stringify(deleteProductInCart));
    console.log(deleteProductInCart);
  };

  return (
    <div>
      <h1>{info.producto}</h1>
      <Link to={`/producto/${info.id}`}>
        <img width={'50px'} height={'50px'} src={info.img} alt="a" />
      </Link>
      <p>
        {info.cantidad} - {info.precio} - {info.total}
      </p>
      <input type="button" onClick={deleteProduct} value="Eliminar producto" />
    </div>
  );
};

export default CartItem;
