import Button from "../../icons/Button/Button";
import Card from "../card/Card";
import "./Productos.css";

const Productos = () => {
	return (
		<div className="productos">
			<h1 className="catalogo-title">Conocé nuestras opciones</h1>
			<section className="catalogo-livings">
				<div className="products-cards-container">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
			<section className="productos-action">
				<Button />
			</section>
		</div>
	);
};

export default Productos;
