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

const PurchaseDetail = () => {
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
      <h1>Compra</h1>
      <p>N° de compra: {id}</p>
      {detalle
        ? detalle.productos.map((el) => (
            <div key={el.id}>
              <p>Producto: {el.producto}</p>
              <p>Categoria: {el.categoria}</p>
              <p>
                Cantidad: {el.cantidad} (x ${el.precio})
              </p>
              <img src={el.img} alt={`img-${el.producto}`} />
              <p>Total: ${el.total}</p>
            </div>
          ))
        : 'Esperando datos...'}
    </>
  );
};

export default PurchaseDetail;
