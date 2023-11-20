import React from 'react'
import PreguntaFrecuente from './preguntafrecuente/PreguntaFrecuente'
import './Preguntasfrecuentes.css'

const Preguntasfrecuentes = () => {
  return (

    <div className='preguntasfrecuentesConteiner'>
      <div className='tituleConteiner'>Preguntas frecuentes</div>

      <div className='preguntasrespuestas'>
      <PreguntaFrecuente pregunta="¿Cómo realizo una reserva?" 
      respuesta="Esta es la respuesta Abonando una seña del 50% del valor del alquiler por medio de transferencia. El 50% restante se abona en el momento de la entrega. No te olvides de enviarnos el comprobante.." />

      <PreguntaFrecuente pregunta="¿La seña congela el precio?" 
      respuesta="No, tiene validez por 15 días. Los valores de alquiler pueden modificarse sin previo aviso. " /> 

      <PreguntaFrecuente pregunta="¿Dónde se encuentran?" 
      respuesta="Estamos en Cuyo 1665, barrio San Martín, ciudad de Córdoba, Argentina." /> 

      <PreguntaFrecuente pregunta="¿Se puede ver el mobiliario?" 
      respuesta="Si. Coordiná con nosotros una cita." /> 

      <PreguntaFrecuente pregunta="¿Puedo ocuparme del traslado?" 
      respuesta="Si, ya sea en flete o en tu vehículo particular, podés coordinar con nosotros el retiro y regreso del mobiliario." /> 
      <PreguntaFrecuente pregunta="¿Emiten factura?" 
      respuesta="Si, factura C. ¡Solicitala!" /> 

      <PreguntaFrecuente pregunta="¿Se puede pagar con tarjeta?" 
      respuesta="Si, te enviamos un link de pago, tené en cuenta que tiene un 10% adicional (comisión de Mercado pago)." />

      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 7?" 
      respuesta="Esta es la respuesta 8." />

      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 7?" 
      respuesta="Esta es la respuesta 9." />

      <PreguntaFrecuente pregunta="¿Cuál es la pregunta 7?" 
      respuesta="Esta es la respuesta 10." />

      
      </div>
    
      <div className='msjNoEncontrar'>
        <p>Si no encontraste la información que necesitabas, podés consultarnos directamente por <b>WhatsApp.</b> </p>
      </div>
    </div>
  )
}

export default Preguntasfrecuentes