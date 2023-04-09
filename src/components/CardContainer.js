import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const CardContainer = ({ info }) => {
  const { img, producto, id } = info;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/producto/${id}`);
  };

  return (
    <>
      <Card img={img} producto={producto} handleClick={handleClick} />
    </>
  );
};

export default CardContainer;
