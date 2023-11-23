import "./Catalogo.css";
import Card from "../card/Card";
import { livings } from "../data.js";
import { otrosProductos } from "../data.js";

const Catalogo = () => {
	return (
		<div className="catalogo">
			<h1 className="catalogo-title">Conocé nuestras opciones</h1>
			<section className="catalogo-livings">
				<h2 className="catalogo-subtitle">LIVINGS</h2>
				<div className="cards-container">
					{livings.map((item) => (
						<Card producto={item} key={item.name} />
					))}
				</div>
			</section>
			<section className="catalogo-otros">
				<h2 className="catalogo-subtitle">OTROS PRODUCTOS</h2>
				<div className="cards-container">
					{otrosProductos.map((item) => (
						<Card producto={item} key={item.name} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Catalogo;
