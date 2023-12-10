import Whatsapp from "../../components/whatsapp/Whatsapp";
import "./IconWhatsapp.css"

const IconWhatsapp = () => {
	
	return (
		<div className="wp-container">
			<img src="/whatsapp.svg" alt="" className="wp-icon" title="Contactanos" onClick={Whatsapp}/>
			
		</div>
	);
};

export default IconWhatsapp;
