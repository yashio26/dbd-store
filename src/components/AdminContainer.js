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
import Admin from './Admin';

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

const AdminContainer = () => {
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
      <Admin
        handleSubmit={handleSubmit}
        newProduct={newProduct}
        handleChange={handleChange}
        handleDelChange={handleDelChange}
        handleDelSubmit={handleDelSubmit}
        handleUpdChange={handleUpdChange}
        handleUpdSubmit={handleUpdSubmit}
        deleteChange={deleteChange}
        deleteProduct={deleteProduct}
        updateChange={updateChange}
        productToEdit={productToEdit}
        handleClick={handleClick}
      />
    </>
  );
};

export default AdminContainer;
