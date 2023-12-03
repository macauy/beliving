import "./QuienesSomos.css";

const QuienesSomos = () => {
	return (
		<div className="section-quienes-conteiner">
			<div className="quienes-img-conteiner">
				<img
					className="img-quienessomos"
					src="../../../public/gallery/1.jpg"
					alt=""
				/>
			</div>

			<div className="hero-mobile">
				<div className="quienes-somos-image-container-mobile"></div>
			</div>
			<div className="quienes-texto-conteiner">
				<h3 className="quienes-antetitulo">Quiénes somos</h3>
				<p className="quienes-texto">
					<b>¡Bienvenidos!</b> Somos Paola y Martin, comenzamos con Be Living
					hace poco mas de tres años, nos especializamos en el alquiler de
					mobiliario para fiestas y eventos,trabajamos muy cerca de nuestros
					clientes para entender sus necesidades y ofrecer soluciones prácticas,
					con el objetivo de superar sus expectativas y asi lograr su
					satisfacción.
				</p>
			</div>
		</div>
	);
};

export default QuienesSomos;

/*
  <div className='somos-conteiner'>
        <div className='somos-infoConteiner'>
            <h2 className='somos-antetitulo'>Quienes somos...</h2>
            <p className='somos-texto'>
           <p>¡Bienvenidos!</p>  Somos Paola y Martin, comenzamos con Be Living hace poco mas de tres años, nos especializamos en el alquiler de mobiliario para fiestas y eventos,  trabajamos muy cerca de nuestros clientes para entender  sus necesidades y ofrecer soluciones prácticas, con el objetivo de superar sus expectativas y asi lograr su satisfacción.
            </p>
        </div>

    </div>
 

     




                className="quienes-img"
 */
