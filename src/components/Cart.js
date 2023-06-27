import React from 'react';
import CartItemContainer from './CartItemContainer';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

const Cart = ({ carrito, precioTotal, handleClick, cleanCart }) => {
  return (
    <div className="cart">
      <h1>Carrito</h1>
      {carrito.length > 0 ? (
        <>
          <section className="productos-carrito">
            {carrito.map((carro, idx) => (
              <CartItemContainer
                key={carro.id}
                info={carro}
                classname={idx % 2 === 0 ? 'par' : 'impar'}
              />
            ))}
          </section>
          <h2>Total: ${precioTotal}</h2>
          <section className="manage-cart">
            <section className="manage-cart__add">
              <Link to={'/productos'}>
                <button>Agregar productos</button>
              </Link>
            </section>
            <section className="manage-cart__buy">
              <input type="button" onClick={handleClick} value="Comprar" />
            </section>
            <section className="manage-cart__remove">
              <input
                type="button"
                onClick={cleanCart}
                value="Limpiar carrito"
              />
            </section>
          </section>
        </>
      ) : (
        <h1>No hay ningun producto</h1>
      )}
    </div>
  );
};

export default Cart;
