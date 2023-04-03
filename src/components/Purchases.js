import React, { useContext, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { db } from '../firebase/firebaseConfig';

const Purchases = () => {
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
      <h1>Compras</h1>
      {comprasHechas ? (
        comprasHechas.map((el) => {
          return (
            <div
              key={el.id}
              style={{ border: '2px solid white', margin: '5px' }}
            >
              {el.productos.map((prod) => {
                return (
                  <div key={prod.id}>
                    <h1 key={prod.id}>{prod.producto}</h1>
                    <h2>{el.fecha}</h2>
                  </div>
                );
              })}
              <Link to={`/datos/compra/${el.id}`}>
                <button>Ver compra</button>
              </Link>
            </div>
          );
        })
      ) : (
        <h2>No hay compras</h2>
      )}
    </>
  );
};

export default Purchases;
