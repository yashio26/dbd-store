import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ProductsContainer = () => {
  const { categoria, nombre } = useParams();

  const capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const [productos, setProductos] = useState([]);

  const [filtro, setFiltro] = useState('');

  const [sortProducts, setSortProducts] = useState('');

  const handleFiltro = (e) => {
    setFiltro(e.target.value);
  };

  const productosFiltrados =
    filtro === ''
      ? productos
      : productos.filter((el) => el.categoria === filtro);

  const handleSort = (e) => {
    setSortProducts(e.target.value);
  };

  const sortBy =
    sortProducts === ''
      ? productos
      : productos.sort((a, b) => {
          if (sortProducts === 'menor') {
            return a.precio - b.precio;
          }
          if (sortProducts === 'mayor') {
            return b.precio - a.precio;
          }
          return null;
        });

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
        if (nombre) {
          const filter = docs.filter((el) =>
            el.producto
              .trim()
              .toLowerCase()
              .includes(nombre.trim().toLowerCase())
          );
          setProductos(filter);
        } else {
          setProductos(docs);
        }
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
  }, [categoria, nombre]);

  return (
    <>
      <Products
        categoria={categoria}
        capitalizeWord={capitalizeWord}
        productos={productos}
        filtro={filtro}
        handleFiltro={handleFiltro}
        productosFiltrados={productosFiltrados}
        sortProducts={sortProducts}
        handleSort={handleSort}
        sortBy={sortBy}
      />
    </>
  );
};

export default ProductsContainer;
