import Button from "../../icons/Button/Button";
import Card from "../card/Card";
import "./Productos.css";
import { Link } from "react-router-dom";
import { livings } from "../data.js";

const Productos = () => {
	return (
		<div className="productos">
			<h1 className="title-container title">Conocé nuestras opciones</h1>
			<section className="productos-livings">
				<div className="products-cards-container">
					{livings.map((item) => (
						<Card producto={item} key={item.name} />
					))}
				</div>
			</section>
			<section className="productos-button-container">
				<Link to={"catalogo"}>
					<Button style="variant-2" text="VER TODOS"></Button>
				</Link>
			</section>
		</div>
	);
};

export default Productos;
