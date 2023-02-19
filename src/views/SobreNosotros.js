import React from 'react';

const SobreNosotros = () => {
  return (
    <div className="SobreNosotros">
      <h1 className="Titulo">Acerca de DBDStore</h1>
      <p>
        DBDStore es la tienda oficial de Dead By Daylight, en español. Vas a
        poder comprar los personajes, los nuevos cosmeticos, y también vas a
        poder comprar celulas auricas. Estate atento al peligro que acecha en la
        niebla si quieres conseguir salir con los mejores precios.
      </p>
      <h2>Sobre Dead By Daylight</h2>
      <p>
        Dead by Daylight es un juego de horror de multijugador (4 contra 1) en
        el que un jugador representa el rol del asesino despiadado y los 4
        restantes juegan como supervivientes que intentan escapar de él para
        evitar ser capturados, torturados y asesinados. Los supervivientes
        juegan en tercera persona y tienen la ventaja de contar con una mejor
        percepción del entorno. El asesino juega en primera persona y está más
        enfocado en su presa. El objetivo del superviviente en cada encuentro es
        escapar del área de matanza sin que lo capture el asesino, algo que
        suena más fácil de lo que es, especialmente con un entorno que cambia
        cada vez que juegas.
      </p>
      <h2>Contacto</h2>
      <div className="FormularioDeContacto">
        <form /* onSubmit={onSubmit} */>
          <label>Nombre</label>
          <input
            required
            type="text"
            placeholder="Nombre"
            //value={datosContacto.name}
            name="name"
            //onChange={handleOnChange}
          />
          <label>Email</label>
          <input
            required
            type="email"
            placeholder="Email"
            //value={datosContacto.email}
            name="email"
            //onChange={handleOnChange}
          />
          <div>
            <label>¿Que quieres consultar?</label>
            <textarea
              required
              placeholder="Descripcion"
              //value={datosContacto.description}
              name="description"
              //onChange={handleOnChange}
            />
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default SobreNosotros;
