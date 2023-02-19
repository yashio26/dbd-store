import React from 'react';

const Card = ({ info }) => {
  const { img, producto } = info;
  return (
    <div
      style={{
        backgroundColor: 'grey',
        width: '15rem',
        border: '1px solid white',
      }}
    >
      <img
        src={img}
        alt="hl"
        style={{ minHeight: '12rem', backgroundColor: 'red', margin: 0 }}
        width="100%"
        height="12rem"
      />
      <p>{producto}</p>
      <button>ver mas</button>
    </div>
  );
};

export default Card;
