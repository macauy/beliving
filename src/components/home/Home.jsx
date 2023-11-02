import "./Home.css";
import Button from "../../icons/Button/Button";

const Home = () => {
	return (
		<main>
			<section className="home-main">
				<div className="home-logo-container">
					<img className="home-logo" src="/logo.svg" alt="Logo" />
				</div>
			</section>
			<section className="home-description">
				<p>
					Más que un <b>servicio de alquiler de muebles para eventos,</b> somos
					creadores de experiencias únicas. Ofrecemos una amplia gama de livings
					y muebles versátiles para tu evento.
				</p>
			</section>
			<section className="home-button-container">
				<Button type="default"></Button>
			</section>
		</main>
	);
};

export default Home;
