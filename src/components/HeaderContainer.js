import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';
import Header from './Header';
import '../styles/header.css';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = () => {
  const { user, setUser } = useContext(UserContext);
  const { setCarrito } = useContext(CartContext);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (!!user) {
      sessionStorage.removeItem('carrito');
      sessionStorage.removeItem('usuario');
      setCarrito([]);
      setUser(null);
    } else setUser(true);
  };

  const handleChange = (e) => {
    console.warn(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === '') {
      return;
    }
    navigate(`/producto/busqueda/${search}`);
    setSearch('');
  };

  return (
    <>
      <Header
        user={user}
        login={login}
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default HeaderContainer;
