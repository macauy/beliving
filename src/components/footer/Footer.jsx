import { IconInstagram } from "../../icons/IconInstagram/IconInstagram";
import { IconLocation } from "../../icons/IconLocation/IconLocation";
import { IconMail } from "../../icons/IconMail/IconMail";
import { IconPhoneNumber } from "../../icons/IconPhoneNumber/IconPhoneNumber";

import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="footer-item">
				<IconPhoneNumber className="footer-icons" />
				0351 255-0936
			</div>
			<div className="footer-item">
				<IconMail className="footer-icons" />
				belivingalquiler@gmail.com
			</div>
			<div className="footer-item footer-location">
				<IconLocation className="footer-icons" />
				<span>
					Cuyo 1665, barrio San Martín <br />
					X5001 Córdoba capital, Argentina
				</span>
			</div>
			<div className="footer-item footer-social-media">
				VISITÁ NUESTRO INSTAGRAM
				<IconInstagram className="instagram-icon" />
			</div>
		</footer>
	);
};

export default Footer;
