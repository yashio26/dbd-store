import React, { useEffect, useState } from 'react';
import Card from './Card';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemList = ({ categoria }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
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
          where('categoria', '==', categoria)
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
      {productos.length > 0 ? (
        productos.map((card) => <Card key={card.id} info={card} />)
      ) : (
        <p>no hay cards</p>
      )}
    </>
  );
};

export default ItemList;
