import React, { useContext, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { db } from '../firebase/firebaseConfig';
import Register from './Register';

const initialRegister = {
  nombre: '',
  email: '',
  usuario: '',
  contraseña: '',
};

const RegisterContainer = () => {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [register, setRegister] = useState(initialRegister);

  const [error, setError] = useState(false);

  const getUser = async () => {
    const docs = [];
    const q = collection(db, 'usuarios');
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const { email, usuario } = doc.data();
      docs.push({ email, usuario });
    });
    const findUser =
      docs.find((el) => el.usuario === register.usuario) ||
      docs.find((el) => el.email === register.email);
    return findUser;
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userExists = await getUser();
    if (userExists) {
      console.log('usuario encontrado en la base de datos', userExists);
      setError(true);
    } else {
      console.log('usuario no encontrado asi que se agrega', userExists);
      const addUser = async () => {
        const docRef = await setDoc(doc(db, 'usuarios', register.usuario), {
          ...register,
          rol: 'user',
        });
        console.log(docRef);
        sessionStorage.setItem(
          'usuario',
          JSON.stringify({
            usuario: register.usuario,
            email: register.email,
            rol: 'user',
            nombre: register.nombre,
          })
        );
        setUser({
          usuario: register.usuario,
          email: register.email,
          rol: 'user',
          nombre: register.nombre,
        });
        setError(false);
        setRegister(initialRegister);
        navigate('/');
      };
      addUser();
    }
  };

  return (
    <div className="register-container">
      <Register
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        register={register}
        error={error}
      />
    </div>
  );
};

export default RegisterContainer;
