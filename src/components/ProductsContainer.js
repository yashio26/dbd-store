import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ProductsContainer = () => {
  const { categoria } = useParams();

  const capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const capitalizeWordd = (word) => {
      return word[0].toUpperCase() + word.slice(1);
    };
    if (!categoria) {
      const traerProductos = async () => {
        const docs = [];
        const querySnapshot = await getDocs(collection(db, 'tienda'));
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
          /* return [{ id: doc.id, data: doc.data() }]; */
        });
        setProductos(docs);
      };
      traerProductos();
    } else {
      const traerProductos = async () => {
        const docs = [];
        const q = query(
          collection(db, 'tienda'),
          where('categoria', '==', capitalizeWordd(categoria))
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
          /* return [{ id: doc.id, data: doc.data() }]; */
        });
        setProductos(docs);
      };
      traerProductos();
    }
  }, [categoria]);

  return (
    <>
      <Products
        categoria={categoria}
        capitalizeWord={capitalizeWord}
        productos={productos}
      />
    </>
  );
};

export default ProductsContainer;
