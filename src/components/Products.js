import React from 'react';
import CardContainer from './CardContainer';
import '../styles/products.css';

const Products = ({
  productos,
  filtro,
  handleFiltro,
  productosFiltrados,
  sortProducts,
  handleSort,
}) => {
  const productoss = [];
  let categoriasDisponibles = null;

  if (productos.length > 0) {
    productos.forEach((el) => productoss.push(el.categoria));
    categoriasDisponibles = Array.from(new Set(productoss));
  }
  return (
    <div className="productss">
      <h1>Productos</h1>
      <div className="divxd">
        <section className="products__filter">
          <h3>Filtros</h3>
          <select value={filtro} onChange={handleFiltro}>
            <option value="">Todas las categorias</option>
            {productos.length > 0 &&
              categoriasDisponibles.map((el) => {
                return (
                  <option key={el} value={el}>
                    {el}
                  </option>
                );
              })}
          </select>
        </section>
        <section className="products__card">
          <div className="sort-by">
            <select value={sortProducts} onChange={handleSort}>
              <option value="">Ordenar por...</option>
              <option value="menor">Menor a mayor precio</option>
              <option value="mayor">Mayor a menor precio</option>
            </select>
          </div>
          <div className="card-container">
            {productos.length > 0 ? (
              productosFiltrados.map((card) => (
                <CardContainer key={card.id} info={card} />
              ))
            ) : (
              <p>no hay cards</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
