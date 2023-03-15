import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ info }) => {
  return (
    <div>
      <h1>{info.producto}</h1>
      <Link to={`/producto/${info.id}`}>
        <img width={'50px'} height={'50px'} src={info.img} alt="a" />
      </Link>
      <p>
        {info.cantidad} - {info.precio} - {info.total}
      </p>
    </div>
  );
};

export default CartItem;
