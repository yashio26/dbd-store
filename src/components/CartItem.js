import React from 'react';

const CartItem = ({ info }) => {
  return (
    <div>
      <h1>{info.producto}</h1>
      <img width={'50px'} height={'50px'} src={info.img} alt="a" />
      <p>
        {info.cantidad} - {info.precio} - {info.total}
      </p>
    </div>
  );
};

export default CartItem;
