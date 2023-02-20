import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const NavBar = () => {
  const { carrito } = useContext(CartContext);
  return (
    <ul>
      <li>Productos</li>
      <li>
        <Link to={'/productos'}>Productos</Link>
      </li>
      <li>Sobre nosotros</li>
      <li>
        <Link to={'/sobre-nosotros'}>Sobre nosotros</Link>
      </li>
      {carrito.length > 0 ? (
        <li>
          <Link to={'/carrito'}>carrito</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default NavBar;
