import "./Catalogo.css";
import Card from "../card/Card";
import { livings } from "../data.js";
import { otrosProductos } from "../data.js";
import { Link } from "react-router-dom";

const Catalogo = () => {
	return (
		<div className="catalogo">
			<Link to={"/catalogo#productos"}></Link>
			<h1 className="catalogo-title">Conocé nuestras opciones</h1>

			<section className="catalogo-livings" id="livings">
				<h2 className="catalogo-subtitle">LIVINGS</h2>
				<div className="cards-container">
					{livings.map((item) => (
						<Card producto={item} key={item.id} />
					))}
				</div>
			</section>
			<section className="catalogo-otros" id="productos">
				<h2 className="catalogo-subtitle">OTROS PRODUCTOS</h2>
				<div className="cards-container">
					{otrosProductos.map((item) => (
						<Card producto={item} key={item.id} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Catalogo;
