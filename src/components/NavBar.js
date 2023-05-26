import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import '../styles/navbar.css';

const NavBar = () => {
  const { carrito } = useContext(CartContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/productos'}>Productos</Link>
        </li>
        <li>
          <Link to={'/sobre-nosotros'}>Sobre nosotros</Link>
        </li>
        {carrito.length > 0 ? (
          <li>
            <Link to={'/carrito'}>carrito</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default NavBar;
