import React from 'react';
import { useParams } from 'react-router-dom';

const CompraDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Compra</h1>
      <p>N° de compra: {id}</p>
    </div>
  );
};

export default CompraDetail;
