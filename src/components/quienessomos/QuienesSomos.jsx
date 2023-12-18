import "./QuienesSomos.css";

const QuienesSomos = () => {
	return (
		<div className="section-quienes-container">
			<div className="quienes-img-container">
				<img className="img-quienessomos" src="/somoscollage.webp" alt="" />
			</div>

			<div className="hero-mobile">
				<div className="quienes-somos-image-container-mobile"></div>
			</div>

			<div className="quienes-texto-container">
				<h3 className="quienes-title title">Quiénes somos</h3>
				<div className="quienes-texto">
					<p>
						<b>¡Bienvenidos!</b> Somos Paola y Martin, comenzamos con Be Living
						hace poco mas de tres años, nos especializamos en el alquiler de
						mobiliario para fiestas y eventos,trabajamos muy cerca de nuestros
						clientes para entender sus necesidades y ofrecer soluciones
						prácticas, con el objetivo de superar sus expectativas y asi lograr
						su satisfacción.
					</p>
				</div>
			</div>
		</div>
	);
};

export default QuienesSomos;
