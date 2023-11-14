import "./Catalogo.css";
import Card from "../card/Card";

const Catalogo = () => {
	return (
		<div className="catalogo">
			<h1 className="catalogo-title">Conocé nuestras opciones</h1>
			<section className="catalogo-livings">
				<h2 className="catalogo-subtitle">LIVINGS</h2>
				<div className="cards-container">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
			<section className="catalogo-otros">
				<h2 className="catalogo-subtitle">OTROS PRODUCTOS</h2>
				<div className="cards-container">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</div>
	);
};

export default Catalogo;
