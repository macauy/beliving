import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
	const producto = {
		name: "Moderno",
		description: "Juego de muebles para 10 personas",
		price: "$ 10.000",
	};
	console.log(producto);
	return (
		<Link to={"/ProductoDetalle"} state={producto}>
			<div className="card">
				<div className="card-picture"></div>
				{/* <div className="card-description">
					<h3>{producto.name}</h3>
					<p>{producto.description}</p>
				</div>
				<div className="card-price">{producto.price}</div> */}
			</div>
		</Link>
	);
};

export default Card;
