import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import UserContext from '../context/UserContext';

const formularioDeContacto = {
  descripcion: '',
};

const SobreNosotros = () => {
  const { user } = useContext(UserContext);

  const [consulta, setConsulta] = useState(formularioDeContacto);

  const [contacto, setContacto] = useState('');

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setConsulta({ ...consulta, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'contacto'), {
      ...consulta,
      usuario: user.usuario,
      email: user.email,
    });
    setContacto(docRef);
    setConsulta(formularioDeContacto);
  };

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
        {contacto ? (
          <>
            <p>¡Los datos de contacto fueron enviados correctamente!</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dbd-latino.appspot.com/o/dbd-game.gif?alt=media&token=af15ede5-92da-4dd6-815a-bba017f095b0"
              alt="Logo-Dead-By-Daylight"
            />
          </>
        ) : (
          <form onSubmit={onSubmit}>
            <div>
              <label>¿Que quieres consultar?</label>
              <textarea
                required
                placeholder="Descripcion"
                value={consulta.descripcion}
                name="descripcion"
                onChange={handleOnChange}
              />
            </div>
            <button>Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SobreNosotros;
