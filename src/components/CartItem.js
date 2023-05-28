import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cartItem.css';

const CartItem = ({ info, deleteProduct }) => {
  return (
    <div className="cart-item">
      <section className="cart-item__data">
        <Link to={`/producto/${info.id}`}>
          <p>
            <strong>{info.producto}</strong>
          </p>
          <img src={info.img} alt={`${info.producto} - img`} />
        </Link>
      </section>
      <section className="cart-item__price">
        <p>Unidades: {info.cantidad}</p>
        <p>
          <strong>Total: ${info.total}</strong>
        </p>
      </section>
      <section className="cart-item__remove">
        <input
          type="button"
          onClick={deleteProduct}
          value="Eliminar producto"
        />
      </section>
    </div>
  );
};

export default CartItem;
