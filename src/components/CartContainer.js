import React, { useContext, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';
import { db } from '../firebase/firebaseConfig';
import Cart from './Cart';

const CartContainer = () => {
  const { carrito, setCarrito, precioTotal, calculoPrecioTotal } =
    useContext(CartContext);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    calculoPrecioTotal();
  }, [calculoPrecioTotal]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(user);
    const docRef = await addDoc(collection(db, 'probandoCompra'), {
      comprador: { usuario: user.usuario, email: user.email },
      fecha: new Date().toISOString(),
      productos: carrito,
      total: precioTotal,
    });
    setCarrito([]);
    sessionStorage.removeItem('carrito');
    console.log('Compra realizada, ', docRef.id);
    navigate(`/datos/compra/${docRef.id}`);
    /* setCompra(carrito); */
  };

  const cleanCart = () => {
    setCarrito([]);
    sessionStorage.removeItem('carrito');
  };

  return (
    <div className="cart-container">
      <Cart
        carrito={carrito}
        precioTotal={precioTotal}
        handleClick={handleClick}
        cleanCart={cleanCart}
      />
    </div>
  );
};

export default CartContainer;
