import QuestionBar from "../../common/questionBar/QuestionBar";
import Button from "../../icons/Button/Button";
// import Slider from "../slider/Slider";
import ThumbsSlider from "../slider/ThumbsSlider";
import "./ProductoDetalle.css";
import { useLocation } from "react-router-dom";

const ProductoDetalle = () => {
	const location = useLocation();

	const { name, description, price, items } = location.state;
	console.log(items);

	return (
		<div>
			<div className="producto-detalle-title">
				<h1>{name}</h1>
			</div>
			<div className="producto-detalle-container">
				<section className="producto-detalle-galery">
					<ThumbsSlider />
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
				<QuestionBar />
			</section>
		</div>
	);
};

export default ProductoDetalle;
