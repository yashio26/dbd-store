import React, { useContext, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';
import { db } from '../firebase/firebaseConfig';

const Cart = () => {
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
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <>
          {carrito.map((carro) => (
            <CartItem key={carro.id} info={carro} />
          ))}
          <h2>{precioTotal}</h2>
          <input type="button" onClick={handleClick} value="Comprar" />
          <input type="button" onClick={cleanCart} value="Limpiar carrito" />
        </>
      ) : (
        <h1>No hay ningun producto</h1>
      )}
    </>
  );
};

export default Cart;
