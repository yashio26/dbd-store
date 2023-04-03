import React, { useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  documentId,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
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

const initialUpdate = {
  id: '',
  categoria: '',
  descripcion: '',
  img: '',
  precio: 0,
  producto: '',
  stock: 0,
};

const Admin = () => {
  const [newProduct, setNewProduct] = useState(initialProduct);

  const [deleteChange, setDeleteChange] = useState(initialDelete);

  const [deleteProduct, setDeleteProduct] = useState(null);

  const [updateChange, setUpdateChange] = useState(initialUpdate);

  const [productToEdit, setProductToEdit] = useState(null);

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
    setDeleteChange({ ...deleteChange, [name]: value });
  };

  const handleDelSubmit = async (e) => {
    e.preventDefault();
    const traerProducto = async () => {
      let docs = null;
      const querySnapshot = await getDocs(
        query(
          collection(db, 'tienda'),
          where(documentId(), '==', deleteChange.id)
        )
      );
      querySnapshot.forEach((doc) => {
        docs = { ...doc.data(), id: doc.id };
      });
      return docs;
    };
    const productExist = await traerProducto();
    if (!!productExist) {
      await deleteDoc(doc(db, 'tienda', deleteChange.id));
      setDeleteChange(initialDelete);
      setDeleteProduct(`Se eliminó ${productExist.producto}.`);
    } else {
      console.log(`No se encontró el producto.`);
    }
  };

  const handleUpdChange = (e) => {
    const { name, value } = e.target;
    setUpdateChange({ ...updateChange, [name]: value });
    console.log(updateChange);
  };

  const handleUpdSubmit = async (e) => {
    e.preventDefault();
    if (productToEdit) {
      console.log(productToEdit, updateChange);
      const { producto, categoria, descripcion, img, precio, stock } =
        updateChange;
      await updateDoc(doc(db, 'tienda', updateChange.id), {
        producto,
        categoria,
        descripcion,
        img,
        precio,
        stock,
      });
      setUpdateChange(initialUpdate);
      setProductToEdit(null);
    } else {
      console.log(productToEdit);
      const traerProducto = async () => {
        let docs = null;
        const querySnapshot = await getDocs(
          query(
            collection(db, 'tienda'),
            where(documentId(), '==', updateChange.id)
          )
        );
        querySnapshot.forEach((doc) => {
          docs = { ...doc.data(), id: doc.id };
        });
        return docs;
      };
      const productExist = await traerProducto();
      if (!!productExist) {
        setProductToEdit(true);
        setUpdateChange(productExist);
        /* await updateDoc(doc(db, 'tienda', updateChange.id), {
              stock: 0,
            }); */
      } else {
        console.log(`No se encontró el producto.`);
      }
    }
  };

  const handleClick = () => {
    setUpdateChange(initialUpdate);
    setProductToEdit(null);
  };

  return (
    <>
      <h1>Panel de administrador</h1>
      <h2>Agregar producto</h2>
      <div>
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
      <h2>Eliminar producto</h2>
      <div>
        <form onSubmit={handleDelSubmit}>
          <label>Inserte ID del producto.</label>
          <input
            required
            type="text"
            name="id"
            value={deleteChange.id}
            onChange={handleDelChange}
          />
          <button>Eliminar producto</button>
        </form>
        {!!deleteProduct && <p>{deleteProduct}</p>}
      </div>
      <h2>Actualizar producto</h2>
      <div>
        {productToEdit && (
          <button onClick={handleClick}>Buscar otro producto</button>
        )}
        <form onSubmit={handleUpdSubmit}>
          {!productToEdit ? (
            <>
              <label>Inserte ID del producto.</label>
              <input
                required
                type="text"
                name="id"
                value={updateChange.id}
                onChange={handleUpdChange}
              />
            </>
          ) : (
            <>
              <label>Producto</label>
              <input
                required
                type="text"
                name="producto"
                value={updateChange.producto}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Categoria</label>
              <input
                required
                type="text"
                name="categoria"
                value={updateChange.categoria}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Descripcion</label>
              <input
                required
                type="text"
                name="descripcion"
                value={updateChange.descripcion}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Imagen</label>
              <input
                required
                type="url"
                name="img"
                value={updateChange.img}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Precio</label>
              <input
                required
                type="number"
                name="precio"
                value={updateChange.precio}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Stock</label>
              <input
                required
                type="number"
                name="stock"
                value={updateChange.stock}
                onChange={handleUpdChange}
              />
              <hr />
            </>
          )}
          <button>
            {productToEdit ? 'Actualizar producto' : 'Buscar producto'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
