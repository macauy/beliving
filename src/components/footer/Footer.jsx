import { IconInstagram } from "../../icons/IconInstagram/IconInstagram";
import { IconLocation } from "../../icons/IconLocation/IconLocation";
import { IconMail } from "../../icons/IconMail/IconMail";
import { IconPhoneNumber } from "../../icons/IconPhoneNumber/IconPhoneNumber";
import logo1 from "/logo1.svg";
import logo2 from "/logo2.svg";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="footer-main">
				<div className="footer-logo">
					<img src={logo1} alt="Logo Be Living" />

					<div className="footer-logo-detail">
						<img src={logo2} alt="Be Living" />
						<p className="footer-slogan">Alquiler de mobiliario para eventos</p>
					</div>
				</div>
				<div className="footer-inline">
					<div className="footer-item">
						<IconPhoneNumber className="footer-icons" />
						0351 255-0936
					</div>
					<div className="footer-item">
						<IconMail className="footer-icons" />
						belivingalquiler@gmail.com
					</div>
				</div>
				<div className="footer-item footer-location">
					<IconLocation className="footer-icons" />
					<span>
						Cuyo 1665, barrio San Martín <br />
						X5001 Córdoba capital, Argentina
					</span>
				</div>
				<div className="footer-item footer-social-media">
					<span>VISITÁ NUESTRO INSTAGRAM</span>
					<IconInstagram className="instagram-icon" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
