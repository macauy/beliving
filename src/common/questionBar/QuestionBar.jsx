import { NavLink } from "react-router-dom";
// import IconQuestion from "../icons/IconQuestion/IconQuestion";
import "./QuestionBar.css";

const QuestionBar = () => {
	return (
		<section className="question-bar">
			<img src="/question.svg" alt="" />
			<p>
				<span>Si tenés alguna duda, visitá nuestra sección de </span>
				<NavLink to={"/PreguntasFrecuentes"}>preguntas frecuentes</NavLink>.
			</p>
		</section>
	);
};

export default QuestionBar;
