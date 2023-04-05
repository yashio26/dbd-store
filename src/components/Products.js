import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const Products = () => {
  const { categoria } = useParams();

  const capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <>
      {!categoria ? <h1>Productos</h1> : <h1>{capitalizeWord(categoria)}</h1>}
      <ItemList categoria={categoria} capitalizeWord={capitalizeWord} />
    </>
  );
};

export default Products;
