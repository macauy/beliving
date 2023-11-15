import "./Button.css";

const Button = ({ type, text }) => {
	return (
		<button className={`button ${type}`}>
			<div className="button-text">{text}</div>
		</button>
	);
};

export default Button;
