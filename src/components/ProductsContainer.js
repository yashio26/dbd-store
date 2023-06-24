import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ProductsContainer = () => {
  const { nombre } = useParams();

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
    const traerProductos = async () => {
      const docs = [];
      const querySnapshot = await getDocs(collection(db, 'tienda'));
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        /* return [{ id: doc.id, data: doc.data() }]; */
      });
      if (nombre) {
        const filter = docs.filter((el) =>
          el.producto.trim().toLowerCase().includes(nombre.trim().toLowerCase())
        );
        setProductos(filter);
      } else {
        setProductos(docs);
      }
    };
    traerProductos();
  }, [nombre]);

  return (
    <div className="products-container">
      <Products
        productos={productos}
        filtro={filtro}
        handleFiltro={handleFiltro}
        productosFiltrados={productosFiltrados}
        sortProducts={sortProducts}
        handleSort={handleSort}
        sortBy={sortBy}
      />
    </div>
  );
};

export default ProductsContainer;
