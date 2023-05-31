import React from 'react';
import CardContainer from './CardContainer';
import '../styles/products.css';

const Products = ({
  categoria,
  capitalizeWord,
  productos,
  filtro,
  handleFiltro,
  productosFiltrados,
}) => {
  const productoss = [];
  let categoriasDisponibles = null;

  if (productos.length > 0) {
    productos.forEach((el) => productoss.push(el.categoria));
    categoriasDisponibles = Array.from(new Set(productoss));
  }
  return (
    <div className="productss">
      {!categoria ? <h1>Productos</h1> : <h1>{capitalizeWord(categoria)}</h1>}
      <div>
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
          {/* <select value="default">
            <option value="default">Ordenar</option>
          </select> */}
          <div>
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
