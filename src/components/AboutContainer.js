import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import UserContext from '../context/UserContext';
import About from './About';

const formularioDeContacto = {
  descripcion: '',
};

const AboutContainer = () => {
  const { user } = useContext(UserContext);

  const [consulta, setConsulta] = useState(formularioDeContacto);

  const [contacto, setContacto] = useState('');

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setConsulta({ ...consulta, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'contacto'), {
      ...consulta,
      usuario: user.usuario,
      email: user.email,
    });
    setContacto(docRef);
    setConsulta(formularioDeContacto);
  };

  return (
    <>
      <About
        contacto={contacto}
        consulta={consulta}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </>
  );
};

export default AboutContainer;
