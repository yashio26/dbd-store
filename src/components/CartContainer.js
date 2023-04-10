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
      fecha: new Date().toLocaleString(),
      productos: carrito,
      total: precioTotal,
    });
    setCarrito([]);
    console.log('Compra realizada, ', docRef.id);
    navigate(`/datos/compra/${docRef.id}`);
    /* setCompra(carrito); */
  };

  const cleanCart = () => {
    setCarrito([]);
    sessionStorage.removeItem('carrito');
  };

  return (
    <>
      <Cart
        carrito={carrito}
        precioTotal={precioTotal}
        handleClick={handleClick}
        cleanCart={cleanCart}
      />
    </>
  );
};

export default CartContainer;