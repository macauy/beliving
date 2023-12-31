import { Link } from "react-router-dom";
import Button from "../../icons/Button/Button";
import "../home/Home.css";

const Hero = () => {
	return (
		<>
			<section className="hero-mobile">
				<section className="home-main">
					<div className="home-image-container">
						<div className="home-logo-container">
							<img className="home-logo" src="/logo.svg" alt="Logo" />
						</div>
					</div>
				</section>

				<section className="home-description">
					<p>
						Más que un <b>servicio de alquiler de muebles para eventos,</b>{" "}
						somos creadores de experiencias únicas. Ofrecemos una amplia gama de
						livings y muebles versátiles para tu evento.
					</p>
				</section>
				<section className="home-button-container">
					<Link to={"/catalogo"}>
						<Button style="default" text="CONOCÉ NUESTROS LIVINGS"></Button>
					</Link>
				</section>
			</section>

			<section className="hero-desktop">
				<div className="desktop-left">
					<div className="desktop-image-container"></div>
					<div className="desktop-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="160"
							height="640"
							viewBox="0 0 160 640"
							fill="none"
						>
							<path d="M0 640L160 0H160V640H0Z" fill="#DBF0ED" />
						</svg>
					</div>
				</div>
				<div className="desktop-right">
					<div className="desktop-description-container">
						<section className="desktop-logo-container">
							<img className="home-logo" src="/logo_desktop.svg" alt="Logo" />
						</section>
						<section className="desktop-description">
							<p>
								Más que un <b>servicio de alquiler de muebles para eventos,</b>{" "}
								somos creadores de experiencias únicas. Ofrecemos una amplia
								gama de livings y muebles versátiles para tu evento.
							</p>
						</section>
						<section className="home-button-container">
							<Link to={"/catalogo"}>
								<Button style="default" text="CONOCÉ NUESTROS LIVINGS" />
							</Link>
						</section>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
