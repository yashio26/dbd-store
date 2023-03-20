import { addDoc, collection } from 'firebase/firestore';
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

const Admin = () => {
  const [newProduct, setNewProduct] = useState(initialProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
    console.log(newProduct);
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
    </div>
  );
};

export default Admin;
