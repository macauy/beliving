// PreguntasFrecuentes.jsx
import React, { useState } from 'react';

// comp funcional de PreguntaFrecuente
const PreguntaFrecuente = ({ pregunta, respuesta }) => {
  // Estado para controlar la visibilidad de la respuesta
  const [abierta, setAbierta] = useState(false);

  // función para manejar el clic en la pregunta y cambiar la visibilidad de la respuesta
  const toggleRespuesta = () => {
    setAbierta(!abierta);
  };

  // renderiza el componente de PreguntaFrecuente
  return (
    <div className="respuesta" onClick={toggleRespuesta}>
      <div className="pregunta">{pregunta}</div>
      {abierta && <div className="">{respuesta}</div>}
    </div>
  );
};

export default PreguntaFrecuente;