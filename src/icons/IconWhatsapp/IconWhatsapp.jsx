import "./IconWhatsapp.css";
import '../../components/whatsapp/Whatsapp'


const IconWhatsapp = () => {
	const handleClick = () => {
		window.open("https://wa.me/529611650194", "_blank");
	  };
	
	return (
		<div className="wp-container">
			<img src="/whatsapp.svg" alt="" className="wp-icon" title="Contactanos" a href="" target="_blank" rel="" onClick={handleClick}/>
			

		</div>
	);
};

export default IconWhatsapp;
