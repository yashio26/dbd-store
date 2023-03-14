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

const ProductDetail = () => {
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
    <div>
      <h1>{producto.producto}</h1>
      <img src={producto.img} alt={producto.producto} />
      {producto.stock < 1 ? (
        <p>No quedan unidades.</p>
      ) : (
        <>
          <p>{producto.stock} unidades disponibles.</p>
          <p>
            Total: {counter}*{producto.precio}
          </p>
          <div>
            <button onClick={addQuantity}>+</button>
            <p>{counter}</p>
            <button onClick={subtractQuantity}>-</button>
          </div>
          <button onClick={addProduct}>agregar producto</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
