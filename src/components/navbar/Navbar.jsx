import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => { 
    setOpen(!isOpen); // sin terminar
  };

	return (
			<nav>
				<Link to={"/"}>
					<div id="logo" className="logo">
						<img src="/public/BL.svg" alt="" />
					</div>
				</Link>
					<div  id='botonburguer' className='botonburguer'>
          <Hamburger color='#45a196' toggled={isOpen} toggle={setOpen} />
          </div>
				<ul className={`menu-container ${isOpen ? 'open' : ''}`}>
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
