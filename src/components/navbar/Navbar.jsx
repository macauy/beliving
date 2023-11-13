import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	
	const [MenuOpen, setMenuOpen] = useState(false);
	
	return (
			<nav>
				<Link to={"/"}>
					<div id="logoBeliving" className="logoBeliving">
						<img src="/public/BL.svg" alt="" />
					</div>
				</Link>
				<div 
					className= "menu" 
						onClick={ () =>
						setMenuOpen(!MenuOpen)
					}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className= {!MenuOpen ? "open" : " "}>
					<li>
						<NavLink to={"/Catalogo"}>Catálogo</NavLink>
					</li>
					<li>
						<NavLink to={"/PreguntasFrecuentes"}>Preguntas frecuentes</NavLink>
					</li>
					<li>
						<NavLink to={"Contacto"}>Contacto</NavLink>
					</li>
				</ul>
			</nav>
	);
};

export default Navbar;
/*
<li> 
	<Link>Inicio</Link>
</li>
<div id='menuHambur' className='logo'><img src="/public/imgHamburguesa.svg" alt="" /></div>
*/
