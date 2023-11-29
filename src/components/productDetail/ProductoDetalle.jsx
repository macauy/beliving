import QuestionBar from "../../common/questionBar/QuestionBar";
import Button from "../../icons/Button/Button";
// import Slider from "../slider/Slider";
import ThumbsSlider from "../slider/ThumbsSlider";
import "./ProductoDetalle.css";
import { NavLink, useLocation } from "react-router-dom";

const ProductoDetalle = () => {
	const location = useLocation();

	const { name, description, price, items, pictures } = location.state;

	return (
		<div>
			<div className="producto-detalle-title">
				<h1>{name}</h1>
			</div>
			<div className="producto-detalle-container">
				<section className="producto-detalle-galery">
					<ThumbsSlider pictures={pictures} />
				</section>
				<section className="producto-detalle">
					<div className="producto-description">
						<p>{description}</p>
						{items && (
							<>
								<p>Incluye:</p>
								<ul>
									{items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</>
						)}
						<p className="producto-detalle-contacto-desktop">
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
			<div className="producto-detalle-contacto">
				<p>
					Para reservar, consultanos por <b>WhatsApp</b> o
					<NavLink to={"/Contacto"}> pedí tu cotización</NavLink>.
				</p>
			</div>
			<section className="producto-detalle-footer">
				<QuestionBar />
			</section>
		</div>
	);
};

export default ProductoDetalle;
