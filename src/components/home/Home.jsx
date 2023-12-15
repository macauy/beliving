import "./Home.css";
import Galery from "../galery/Galery";
import Productos from "../productos/Productos";
import QuestionBar from "../../common/questionBar/QuestionBar";
import QuienesSomos from "../quienessomos/QuienesSomos";
import Opiniones from "../opiniones/Opiniones";
import OpinionesSlidermobile from "../opinionesslidermobile/OpinionesSlidermobile";
import Hero from "../hero/Hero";

const Home = () => {
	let width = window.innerWidth;

	return (
		<>
			<section>
				<Hero />
			</section>
			<section>
				<Galery />
			</section>
			<section>{width < 768 ? <Productos /> : <QuienesSomos />}</section>
			<section>{width < 768 ? <QuienesSomos /> : <Productos />}</section>
			<section>
				<Opiniones />
			</section>

			<section>
				<OpinionesSlidermobile />
			</section>

			<section className="home-question-bar">
				<QuestionBar />
			</section>
		</>
	);
};

export default Home;
