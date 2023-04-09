import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ info, deleteProduct }) => {
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
