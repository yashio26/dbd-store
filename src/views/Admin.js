import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  documentId,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';

const initialProduct = {
  categoria: '',
  descripcion: '',
  img: '',
  precio: 0,
  producto: '',
  stock: 0,
};

const initialDelete = {
  id: '',
};

const Admin = () => {
  const [newProduct, setNewProduct] = useState(initialProduct);

  const [delProduct, setDelProduct] = useState(initialDelete);

  const [product, setProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { precio, stock } = newProduct;
    const numPrecio = parseFloat(precio);
    const numStock = parseInt(stock);
    const docRef = await addDoc(collection(db, 'tienda'), {
      ...newProduct,
      precio: numPrecio,
      stock: numStock,
    });
    console.log(docRef.id);
    setNewProduct(initialProduct);
  };

  const handleDelChange = (e) => {
    const { name, value } = e.target;
    setDelProduct({ ...delProduct, [name]: value });
  };

  const handleDelSubmit = async (e) => {
    e.preventDefault();
    const traerProducto = async () => {
      let docs = null;
      const querySnapshot = await getDocs(
        query(
          collection(db, 'tienda'),
          where(documentId(), '==', delProduct.id)
        )
      );
      querySnapshot.forEach((doc) => {
        docs = { ...doc.data(), id: doc.id };
      });
      return docs;
    };
    const productExist = await traerProducto();
    if (!!productExist) {
      await deleteDoc(doc(db, 'tienda', delProduct.id));
      setDelProduct(initialDelete);
      setProduct(`Se eliminó ${productExist.producto}.`);
    } else {
      setProduct(`No se encontró el producto.`);
    }
  };

  return (
    <div>
      <h1>Panel de administrador</h1>
      <h2>Agregar producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Inserte el nombre del producto.</label>
        <input
          required
          type="text"
          name="producto"
          value={newProduct.producto}
          onChange={handleChange}
        />
        <hr />
        <label>Inserte la categoria del producto.</label>
        <input
          required
          type="text"
          name="categoria"
          value={newProduct.categoria}
          onChange={handleChange}
        />
        <hr />
        <label>Inserte precio del producto.</label>
        <input
          required
          type="number"
          name="precio"
          value={newProduct.precio}
          onChange={handleChange}
        />
        <hr />
        <label>Inserte el stock del producto.</label>
        <input
          required
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleChange}
        />
        <hr />
        <label>Inserte la descripcion del producto.</label>
        <input
          required
          type="text"
          name="descripcion"
          value={newProduct.descripcion}
          onChange={handleChange}
        />
        <hr />
        <label>Inserte link de la imagen del producto.</label>
        <input
          required
          type="url"
          name="img"
          value={newProduct.img}
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      <h2>Eliminar producto</h2>
      <div>
        <form onSubmit={handleDelSubmit}>
          <input
            required
            type="text"
            name="id"
            value={delProduct.id}
            onChange={handleDelChange}
          />
          <button>Eliminar producto</button>
        </form>
        {!!product && <p>{product}</p>}
      </div>
    </div>
  );
};

export default Admin;
