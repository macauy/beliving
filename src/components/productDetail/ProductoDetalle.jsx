import Button from "../../icons/Button/Button";
import Slider from "../slider/Slider";
import "./ProductoDetalle.css";
import { NavLink, useLocation } from "react-router-dom";

const ProductoDetalle = () => {
	const location = useLocation();

	const { name, description, price } = location.state;

	return (
		<div>
			<div className="producto-detalle-title">
				<h1>{name}</h1>
			</div>
			<div className="producto-detalle-container">
				<section className="producto-detalle-galery">
					<Slider slides={1} />
				</section>
				<section className="producto-detalle">
					<div className="producto-description">
						<p>{description}</p>
						<p>Incluye:</p>
						<ul>
							<li>1 sillón doble con respaldo</li>
							<li>1 puff doble</li>
							<li>6 puffs </li>
							<li>almohadón</li>
							<li>plato de sitio</li>
						</ul>
						<p>
							Para reservar, consultanos por WhatsApp o pedí tu cotización
							haciendo click en el siguiente botón.
						</p>
					</div>
					<div className="producto-price">
						<div>
							<h3>{price} *</h3>
							<p>*No incluye costo de envío</p>
						</div>
						<div className="producto-price-button">
							<Button type="default" text="COTIZAR"></Button>
						</div>
					</div>
				</section>
			</div>
			<section className="producto-detalle-footer">
				<p>
					Si tenés alguna duda, visitá nuestra sección de{" "}
					<NavLink to={"/PreguntasFrecuentes"}>preguntas frecuentes</NavLink>.
				</p>
			</section>
		</div>
	);
};

export default ProductoDetalle;
