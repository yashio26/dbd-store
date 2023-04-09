import React, { useContext, useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import {
  getDocs,
  collection,
  documentId,
  where,
  query,
} from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import ProductDetail from './ProductDetail';

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const [counter, setCounter] = useState(1);

  const { carrito, setCarrito } = useContext(CartContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const addProduct = () => {
    console.log(carrito, producto);
    const productoEnCarrito = carrito.find(
      (product) => product.id === producto.id
    );
    if (carrito.includes(productoEnCarrito)) {
      console.log('producto encontrado', productoEnCarrito);
      //Esto se puede cambiar por un setCarrito, revisar. Ya que asi modifico el carrito directamente sin pasar por el seteo.
      productoEnCarrito.cantidad = counter;
      productoEnCarrito.total = counter * productoEnCarrito.precio;
      sessionStorage.setItem('carrito', JSON.stringify(carrito));
      /* const changeQuantity = (productoEnCarrito.quantity = counter); */
      /* const updateQuantity = { ...producto, cantidad: counter }; */
      /* if (carrito.includes(productoEnCarrito)) {
            productoEnCarrito.cantidad = counter;
          } */
      /* setCarrito([...carrito, (productoEnCarrito.cantidad = counter)]); */
    } else {
      const total = counter * producto.precio;
      const updateQuantity = {
        ...producto,
        cantidad: counter,
        total: total,
      };
      console.log('producto no encontrado');
      setCarrito([...carrito, updateQuantity]);
      sessionStorage.setItem(
        'carrito',
        JSON.stringify([...carrito, updateQuantity])
      );
    }
    console.log(carrito);
    navigate('/carrito');
  };

  const addQuantity = () => {
    if (counter < producto.stock) {
      setCounter(counter + 1);
    }
  };

  const subtractQuantity = () => {
    if (producto.stock >= counter && counter > 1) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    const traerProductos = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, 'tienda'), where(documentId(), '==', id))
      );
      querySnapshot.forEach((doc) => {
        setProducto({ ...doc.data(), id: doc.id });
      });
      console.log('a');
    };
    traerProductos();
  }, [id]);

  /* console.log(producto); */

  return (
    <>
      <ProductDetail
        producto={producto}
        counter={counter}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
        addProduct={addProduct}
      />
    </>
  );
};

export default ProductDetailContainer;
