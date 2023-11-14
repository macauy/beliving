import "./Card.css";

const Card = () => {
	return (
		<div className="card">
			<div className="card-picture"></div>
			<div className="card-description">
				<h3>Moderno</h3>
				<p>Juego de muebles para 10 personas</p>
			</div>
			<div className="card-price">$ 10.000</div>
		</div>
	);
};

export default Card;
