import "./Button.css";

const Button = ({ style, text, type = "button" }) => {
	return (
		<button className={`button ${style}`} type={type}>
			<div className="button-text">{text}</div>
		</button>
	);
};

export default Button;
