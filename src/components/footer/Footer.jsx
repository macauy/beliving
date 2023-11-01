import { IconInstagram } from "../../icons/IconInstagram/IconInstagram";
import { IconLocation } from "../../icons/IconLocation/IconLocation";
import { IconPhoneNumber } from "../../icons/IconPhoneNumber/IconPhoneNumber";
import { IconSchedule } from "../../icons/IconSchedule/IconSchedule";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="footer-item footer-phone">
				<IconPhoneNumber className="footer-icons" />
				0351 255-0936
			</div>
			<div className="footer-item">
				<IconLocation className="footer-icons" />
				<span>
					Cuyo 1665 <br />
					X5001 Córdoba, Argentina
				</span>
			</div>
			<div className="footer-item">
				<IconSchedule className="footer-icons" />
				Lunes a viernes de 8 a 18hs
				<br /> Sábado de 8 a 12hs
				<br /> Domingo cerrado
			</div>
			<div className="footer-item footer-social-media">
				VISITÁ NUESTRAS REDES
				<IconInstagram className="instagram-icon" />
			</div>
		</footer>
	);
};

export default Footer;
