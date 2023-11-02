import "./Home.css";

const Home = () => {
	return (
		<main>
			<section className="home-main">
				<div className="home-logo-container">
					<img className="main-container-logo" src="/logo.svg" alt="" />
				</div>
			</section>

			<p>
				Más que un servicio de alquiler de muebles para eventos, somos creadores
				de experiencias únicas. Ofrecemos una amplia gama de livings y muebles
				versátiles para tu evento.
			</p>
		</main>
	);
};

export default Home;
