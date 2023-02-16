import React from 'react';

const Card = () => {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        width: '15rem',
        border: '1px solid white',
      }}
    >
      <p style={{ minHeight: '12rem', backgroundColor: 'red', margin: 0 }}>
        imagen
      </p>
      <p>nombre</p>
      <button>ver mas</button>
    </div>
  );
};

export default Card;
