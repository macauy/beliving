import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ producto }) => {
	console.log("en card");
	console.log(producto, "producto");
	return (
		<Link to={"/ProductoDetalle"} state={producto}>
			<div className="card">
				<div
					className="card-picture"
					style={{ backgroundImage: `url(${producto.url})` }}
				></div>
				<div className="card-description">
					<h3>{producto.name}</h3>
					<p>{producto.title}</p>
				</div>
				<div className="card-price">{producto.price}</div>
			</div>
		</Link>
	);
};

export default Card;
