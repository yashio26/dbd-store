import React, { useContext, useEffect, useState } from 'react';
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { db } from '../firebase/firebaseConfig';
import PurchaseDetail from './PurchaseDetail';

const PurchaseDetailContainer = () => {
  const { id } = useParams();

  const { comprasHechas } = useContext(UserContext);

  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    const traerProductos = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, 'probandoCompra'), where(documentId(), '==', id))
      );
      querySnapshot.forEach((doc) => {
        setDetalle({ productos: doc.data().productos, id: doc.id });
      });
    };
    traerProductos();
  }, [comprasHechas, id]);

  return (
    <>
      <PurchaseDetail id={id} detalle={detalle} />
    </>
  );
};

export default PurchaseDetailContainer;
