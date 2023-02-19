import React, { useEffect, useState } from 'react';
import Card from './Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const traerProductos = async () => {
      const docs = [];
      const querySnapshot = await getDocs(collection(db, 'tienda'));
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        /* return [{ id: doc.id, data: doc.data() }]; */
      });
      console.log('a');
      setProductos(docs);
    };
    traerProductos();
  }, []);

  return (
    <>
      {productos.length > 0 ? (
        productos.map((card) => <Card key={card.id} info={card} />)
      ) : (
        <p>no hay cards</p>
      )}
    </>
  );
};

export default ItemList;
