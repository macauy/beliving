import "./Button.css";

const Button = ({ type }) => {
	return (
		<button className={`button ${type}`}>
			<div className="button-text">CONOCÉ NUESTROS LIVINGS</div>
		</button>
	);
};

export default Button;
