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
    setCarrito([...carrito, producto]);
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

  console.log(producto);

  return (
    <div>
      <h1>{producto.producto}</h1>
      <img src={producto.img} alt={producto.producto} />
      {producto.stock < 1 ? (
        <p>No quedan unidades.</p>
      ) : (
        <>
          <p>{producto.stock} unidades disponibles.</p>
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
