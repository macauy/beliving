import React from 'react'
import PreguntaFrecuente from './preguntafrecuente/PreguntaFrecuente'
import './Preguntasfrecuentes.css'

const Preguntasfrecuentes = () => {
  return (

    <div className='preguntasfrecuentesConteiner'>
      <div className='tituleConteiner'>Preguntas frecuentes</div>
      <div className='preguntasrespuestas'>
      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 1?" respuesta="Esta es la respuesta 1." />
      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 2?" respuesta="Esta es la respuesta 2." /> 
      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 3?" respuesta="Esta es la respuesta 3." /> 
      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 4?" respuesta="Esta es la respuesta 4." /> 
      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 5?" respuesta="Esta es la respuesta 5." /> 
      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 6?" respuesta="Esta es la respuesta 6." /> 
      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 7?" respuesta="Esta es la respuesta 7." />
      </div>
      <div className='msjNoEncontrar'>
        <p>Si no encontraste la información que necesitabas, podés consultarnos directamente por <b>WhatsApp.</b> </p>
      </div>
    </div>
  )
}

export default Preguntasfrecuentes