import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import UserContext from '../context/UserContext';
import Login from './Login';

const initialLogin = { usuario: '', contraseña: '' };

const LoginContainer = () => {
  const { setUser } = useContext(UserContext);

  const [login, setLogin] = useState(initialLogin);

  const navigate = useNavigate();

  /* useEffect(() => {
      const session = sessionStorage.getItem('usuario');
      if (session) {
        console.log('hay datos en session');
        setUser(session);
      } else console.log('no hay datos en session');
    }, [setUser]); */

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const getUser = async () => {
    let docs = {};
    const q = query(
      collection(db, 'usuarios'),
      where('usuario', '==', login.usuario),
      where('contraseña', '==', login.contraseña)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const { email, rol, usuario, nombre } = doc.data();
      docs = { email, rol, usuario, nombre };
    });
    return docs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await getUser();
    console.log(user);
    if (Object.keys(user).length >= 1) {
      console.log('setea', Object.keys(user).length);
      sessionStorage.setItem(
        'usuario',
        JSON.stringify({
          usuario: user.usuario,
          email: user.email,
          rol: user.rol,
          nombre: user.nombre,
        })
      );
      setUser(user);
      navigate('/');
    } else {
      console.log(Object.keys(user).length);
      alert('datos incorrectos');
    }
  };

  return (
    <div className="login-container">
      <Login
        login={login}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default LoginContainer;
