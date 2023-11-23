import Button from "../../icons/Button/Button";
import Card from "../card/Card";
// import "./Productos.css";
import { Link } from "react-router-dom";

const Productos = () => {
	const livings = [
		{
			name: "Moderno",
			description: "Juego de muebles para 10 personas",
			price: "$ 10.000",
		},
		{
			name: "Industrial",
			description: "Juego de muebles para 10 personas",
			price: "$ 9.000",
		},
		{
			name: "Rústico",
			description: "Juego de muebles para 10 personas",
			price: "$ 10.000",
		},
		{
			name: "Infantil",
			description: "Mini living para 10 niños",
			price: "$ 5.000",
		},
	];

	return (
		<div className="productos">
			<h1 className="catalogo-title">Conocé nuestras opciones</h1>
			<section className="catalogo-livings">
				<div className="products-cards-container">
					{livings.map((item) => (
						<Card producto={item} key={item.name} />
					))}
				</div>
			</section>
			<section className="productos-button-container">
				<Link to={"catalogo"}>
					<Button type="variant-2" text="VER TODOS"></Button>
				</Link>
			</section>
		</div>
	);
};

export default Productos;
