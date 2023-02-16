import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>Productos</li>
      <Link to={'/productos'}>Productos</Link>
      <li>Sobre nosotros</li>
      <Link to={'/sobre-nosotros'}>Sobre nosotros</Link>
    </ul>
  );
};

export default NavBar;
