import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ info }) => {
  const { img, producto, id } = info;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/producto/${id}`);
  };

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
      <button onClick={handleClick}>ver mas</button>
    </div>
  );
};

export default Card;
