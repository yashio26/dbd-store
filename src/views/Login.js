import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import UserContext from '../context/UserContext';

const initialLogin = { usuario: '', contraseña: '' };

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [login, setLogin] = useState(initialLogin);

  const navigate = useNavigate();

  useEffect(() => {
    const session = sessionStorage.getItem('usuario');
    if (session) {
      console.log('hay datos en session');
      setUser(session);
    } else console.log('no hay datos en session');
  }, [setUser]);

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
      const { contraseña, usuario } = doc.data();
      docs = { contraseña, usuario };
    });
    return docs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await getUser();
    console.log(user);
    if (Object.keys(user).length >= 1) {
      console.log('setea', Object.keys(user).length);
      sessionStorage.setItem('usuario', user.usuario);
      setUser(user.usuario);
      navigate('/');
    } else {
      console.log(Object.keys(user).length);
      alert('datos incorrectos');
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: 'gray' }}>
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input
            required
            type="text"
            name="usuario"
            value={login.usuario}
            onChange={handleChange}
          />
          <hr />
          <label>Contraseña</label>
          <input
            required
            type="password"
            name="contraseña"
            value={login.contraseña}
            onChange={handleChange}
          />
          <hr />
          <button>Iniciar sesión</button>
          <hr />
        </form>
      </div>
      <Link to={'/registro'}>¿No estás registrado?</Link>
    </div>
  );
};

export default Login;
