import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import {
  getDocs,
  collection,
  documentId,
  where,
  query,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [productos, setProductos] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const traerProductos = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, 'tienda'), where(documentId(), '==', id))
      );
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setProductos({ ...doc.data(), id: doc.id });
      });
      console.log('a');
    };
    traerProductos();
  }, [id]);

  return (
    <div>
      <h1>{productos.producto}</h1>
      <img src={productos.img} alt={productos.producto} />
    </div>
  );
};

export default ProductDetail;
