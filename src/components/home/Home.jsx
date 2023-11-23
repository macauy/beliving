import "./Home.css";
import Button from "../../icons/Button/Button";
import Galery from "../galery/Galery";
import Productos from "../productos/Productos";
import { Link } from "react-router-dom";
import IconWhatsapp from "../../icons/IconWhatsapp/IconWhatsapp";

const Home = () => {
	return (
		<main>
			<div className="hero">
				<section className="home-main">
					<div className="home-image-container">
						<div className="home-logo-container">
							<img className="home-logo" src="/logo.svg" alt="Logo" />
						</div>
					</div>
				</section>
				<section className="home-desktop">
					<section className="home-desktop-logo-container">
						<img className="home-logo" src="/logo_desktop.svg" alt="Logo" />
					</section>
					<section className="home-description">
						<p>
							Más que un <b>servicio de alquiler de muebles para eventos,</b>{" "}
							somos creadores de experiencias únicas. Ofrecemos una amplia gama
							de livings y muebles versátiles para tu evento.
						</p>
					</section>
					<section className="home-button-container">
						<Link to={"catalogo"}>
							<Button type="default" text="CONOCÉ NUESTROS LIVINGS"></Button>
						</Link>
					</section>
				</section>
			</div>
			<section>
				<Galery></Galery>
			</section>
			<section>
				<Productos />
			</section>
			<IconWhatsapp />
		</main>
	);
};

export default Home;
