import PreguntaFrecuente from "./preguntafrecuente/PreguntaFrecuente";
import "./Preguntasfrecuentes.css";

const Preguntasfrecuentes = () => {
	return (
		<div className="preguntasfrecuentesConteiner">
			<div className="title-container title">Preguntas frecuentes</div>

			<div className="preguntas-container">
				<PreguntaFrecuente
					pregunta="¿Cómo realizo una reserva?"
					respuesta="La reserva se realiza con una seña equivalente al 50% del presupuesto acordado, generalmente mediante transferencia. También podés abonar en efectivo, con tarjeta o por Mercado Pago (estos dos últimos llevan un recargo del 10%)."
				/>

				<PreguntaFrecuente
					pregunta="¿La seña congela el precio?"
					respuesta="No, la seña es al solo efecto de reservar la fecha de tu evento. El día de entrega del mobiliario se abonará el saldo y el ajuste de precios que pudiera corresponder. "
				/>

				<PreguntaFrecuente
					pregunta="¿Qué incluye el flete?"
					respuesta="El flete incluye envío y retiro, tené en cuenta que el costo del mismo varía según la cantidad de mobiliario, la distancia, el día y la hora de prestación del servicio. En caso de envíos y retiros los días sábados después de las 18hs y los días domingo, se cobrará un cargo adicional. También es importante que sepas que el armado no está incluido y que, en caso de que tu evento sea en un edificio, la entrega del mobiliario se realizará en planta baja."
				/>

				<PreguntaFrecuente
					pregunta="¿Dónde se encuentran?"
					respuesta="Estamos en Cuyo 1665, barrio San Martín, ciudad de Córdoba, Argentina."
				/>

				<PreguntaFrecuente
					pregunta="¿Se puede ver el mobiliario?"
					respuesta="Sí, concertando una cita previa."
				/>

				<PreguntaFrecuente
					pregunta="¿Puedo hacerme cargo del flete o traslado?"
					respuesta="Sí, siempre que cuentes con un vehículo en condiciones para resguardo de la carga o bien contratando el servicio de flete en forma directa."
				/>

				<PreguntaFrecuente
					pregunta="¿Emiten factura?"
					respuesta='Sí, actualmente somos contribuyentes del Régimen Simplificado (Monotributo), por lo que el tipo de factura que emitimos es Tipo "C"."'
				/>

				<PreguntaFrecuente
					pregunta="¿Se puede pagar con tarjeta?"
					respuesta="Sí, tené en cuenta que en estos casos, al total de presupuesto acordado se le adicionará un 10% para cubrir los gastos asociados a este medio de pago (comisión de Mercado Pago)."
				/>
			</div>

			<div className="mensajes-texto">
				<p>
					Si no encontraste la información que necesitabas, podés consultarnos
					directamente por <b>WhatsApp.</b>{" "}
				</p>
			</div>
		</div>
	);
};

export default Preguntasfrecuentes;
