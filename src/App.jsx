import Footer from "./components/footer/Footer";
import Galery from "./components/galery/Galery";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Galery />
			<Slider/>
			<Footer />
		</>
	);
}

export default App;
