import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

const Productos = () => {
  const { categoria } = useParams();

  const capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div>
      {!categoria ? <h1>Productos</h1> : <h1>{capitalizeWord(categoria)}</h1>}
      <ItemList categoria={categoria} capitalizeWord={capitalizeWord} />
    </div>
  );
};

export default Productos;
