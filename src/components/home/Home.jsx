import "./Home.css";
import Button from "../../icons/Button/Button";
import Galery from "../galery/Galery";
import Productos from "../productos/Productos";
import { Link } from "react-router-dom";
import IconWhatsapp from "../../icons/IconWhatsapp/IconWhatsapp";
import QuestionBar from "../../common/questionBar/QuestionBar";
import QuienesSomos from "../quienessomos/QuienesSomos";
import Opiniones from "../opiniones/Opiniones";
// import OpinionMelisa from "../opinionineseach/opinionmelisa/OpinionMelisa";
import OpinionesSlidermobile from "../opinionesslidermobile/OpinionesSlidermobile";

const Home = () => {
	return (
		<main>
			<div className="hero-mobile">
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
					<Link to={"catalogo"}>
						<Button style="default" text="CONOCÉ NUESTROS LIVINGS"></Button>
					</Link>
				</section>
			</div>

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
							<Link to={"catalogo"}>
								<Button style="default" text="CONOCÉ NUESTROS LIVINGS"></Button>
							</Link>
						</section>
					</div>
				</div>
			</section>
			<section>
				<Galery></Galery>
			</section>
			<section>
				<QuienesSomos />
			</section>
			<section>
				<Productos />
			</section>
			<section>
				{" "}
				<Opiniones />
			</section>

			<section className="home-question-bar">
				<QuestionBar />
			</section>

			<section>
				<OpinionesSlidermobile />
			</section>

			<IconWhatsapp />
		</main>
	);
};

export default Home;
