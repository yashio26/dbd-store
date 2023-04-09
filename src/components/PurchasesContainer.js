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
        docs.push({ ...doc.data(), id: doc.id });
      });
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
