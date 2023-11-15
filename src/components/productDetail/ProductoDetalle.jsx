import Slider from "../slider/Slider";
import "./ProductoDetalle.css";
import { useLocation } from "react-router-dom";

const ProductoDetalle = () => {
	const location = useLocation();
	console.log("location", location.state);
	const { name, description, price } = location.state;

	return (
		<div>
			<Slider slides={1} />
			<section>
				<div className="card-description">
					<h1>{name}</h1>
					<p>{description}</p>
					<h3>U$S {price}</h3>
				</div>
			</section>
		</div>
	);
};

export default ProductoDetalle;
