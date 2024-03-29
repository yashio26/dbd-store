import React, { useContext, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import UserContext from '../context/UserContext';
import { db } from '../firebase/firebaseConfig';
import Purchases from './Purchases';

const PurchasesContainer = () => {
  const { user, comprasHechas, setComprasHechas } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      let docs = [];
      const q = query(
        collection(db, 'probandoCompra'),
        where('comprador.usuario', '==', user.usuario)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const date = new Date(doc.data().fecha);
        docs.push({ ...doc.data(), id: doc.id, fecha: date });
      });
      docs.sort((a, b) => b.fecha - a.fecha);
      setComprasHechas(docs);
    };
    getUser();
  }, [setComprasHechas, user.usuario]);

  return (
    <div className="purchases-container">
      <Purchases comprasHechas={comprasHechas} />
    </div>
  );
};

export default PurchasesContainer;
