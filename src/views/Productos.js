import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

const Productos = () => {
  const { categoria } = useParams();
  return (
    <div>
      {!categoria ? <h1>Productos</h1> : <h1>{categoria}</h1>}
      <ItemList categoria={categoria} />
    </div>
  );
};

export default Productos;
