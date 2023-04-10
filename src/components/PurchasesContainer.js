import React, { useContext, useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
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
        const dateString = doc.data().fecha;
        const [datePart, timePart] = dateString.split(',');
        const [day, month, year] = datePart.split('/');
        const [hour, minute, second] = timePart.split(':');
        const date = new Date(year, month - 1, day, hour, minute, second);
        docs.push({ ...doc.data(), id: doc.id, fecha: date });
      });
      docs.sort((a, b) => b.fecha - a.fecha);
      setComprasHechas(docs);
    };
    getUser();
  }, [setComprasHechas, user.usuario]);

  return (
    <>
      <Purchases comprasHechas={comprasHechas} />
    </>
  );
};

export default PurchasesContainer;
