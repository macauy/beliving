import "./Catalogo.css";
import Card from "../card/Card";

const Catalogo = () => {
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

	const otrosProductos = [
		{
			name: "Barra para tragos",
			description: "Barra móvil reforzada",
			price: "$ 10.000",
		},
		{
			name: "Barritas altas y banquetas",
			description: "Barra alta con 4 banquetas",
			price: "$ 9.000",
		},
		{
			name: "Jenga gigante",
			description: "Juego de madera",
			price: "$ 10.000",
		},
		{
			name: "Mesa civil",
			description: "Mini living para 10 niños",
			price: "$ 5.000",
		},
	];
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
