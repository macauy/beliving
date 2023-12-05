// PreguntasFrecuentes.jsx
import { useState } from "react";
import "./PeguntaFrecuente.css";

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
		<div className="pregunta-container" onClick={toggleRespuesta}>
			<div className="pregunta">
				{pregunta}
				<img
					src="/down.svg"
					alt=""
					className={`pregunta-arrow ${abierta && "pregunta-arrow-active"}`}
				/>
			</div>
			{abierta && <div className="respuesta-mobile">{respuesta}</div>}
			<div className={`respuesta-desktop ${abierta ? "abierta" : ""}`}>
				{respuesta}
			</div>
		</div>
	);
};
export default PreguntaFrecuente;
