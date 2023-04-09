import React from 'react';

const Admin = ({
  handleSubmit,
  newProduct,
  handleChange,
  handleDelChange,
  handleDelSubmit,
  handleUpdChange,
  handleUpdSubmit,
  deleteChange,
  deleteProduct,
  updateChange,
  productToEdit,
  handleClick,
}) => {
  return (
    <div>
      <h1>Panel de administrador</h1>
      <h2>Agregar producto</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Inserte el nombre del producto.</label>
          <input
            required
            type="text"
            name="producto"
            value={newProduct.producto}
            onChange={handleChange}
          />
          <hr />
          <label>Inserte la categoria del producto.</label>
          <input
            required
            type="text"
            name="categoria"
            value={newProduct.categoria}
            onChange={handleChange}
          />
          <hr />
          <label>Inserte precio del producto.</label>
          <input
            required
            type="number"
            name="precio"
            value={newProduct.precio}
            onChange={handleChange}
          />
          <hr />
          <label>Inserte el stock del producto.</label>
          <input
            required
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleChange}
          />
          <hr />
          <label>Inserte la descripcion del producto.</label>
          <input
            required
            type="text"
            name="descripcion"
            value={newProduct.descripcion}
            onChange={handleChange}
          />
          <hr />
          <label>Inserte link de la imagen del producto.</label>
          <input
            required
            type="url"
            name="img"
            value={newProduct.img}
            onChange={handleChange}
          />
          <button>Enviar</button>
        </form>
      </div>
      <h2>Eliminar producto</h2>
      <div>
        <form onSubmit={handleDelSubmit}>
          <label>Inserte ID del producto.</label>
          <input
            required
            type="text"
            name="id"
            value={deleteChange.id}
            onChange={handleDelChange}
          />
          <button>Eliminar producto</button>
        </form>
        {!!deleteProduct && <p>{deleteProduct}</p>}
      </div>
      <h2>Actualizar producto</h2>
      <div>
        {productToEdit && (
          <button onClick={handleClick}>Buscar otro producto</button>
        )}
        <form onSubmit={handleUpdSubmit}>
          {!productToEdit ? (
            <>
              <label>Inserte ID del producto.</label>
              <input
                required
                type="text"
                name="id"
                value={updateChange.id}
                onChange={handleUpdChange}
              />
            </>
          ) : (
            <>
              <label>Producto</label>
              <input
                required
                type="text"
                name="producto"
                value={updateChange.producto}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Categoria</label>
              <input
                required
                type="text"
                name="categoria"
                value={updateChange.categoria}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Descripcion</label>
              <input
                required
                type="text"
                name="descripcion"
                value={updateChange.descripcion}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Imagen</label>
              <input
                required
                type="url"
                name="img"
                value={updateChange.img}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Precio</label>
              <input
                required
                type="number"
                name="precio"
                value={updateChange.precio}
                onChange={handleUpdChange}
              />
              <hr />
              <label>Stock</label>
              <input
                required
                type="number"
                name="stock"
                value={updateChange.stock}
                onChange={handleUpdChange}
              />
              <hr />
            </>
          )}
          <button>
            {productToEdit ? 'Actualizar producto' : 'Buscar producto'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
