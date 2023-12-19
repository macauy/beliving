import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { NavHashLink } from "react-router-hash-link";
import "./Navegacion.css";

export default function Navegacion({ category, name, previo, siguiente }) {
	const seccion = "/catalogo#" + category.toLowerCase();
	return (
		<div role="presentation" className="navegacion">
			<Breadcrumbs
				separator=">"
				aria-label="breadcrumb"
				className="navegacion-texto"
				sx={{
					color: "var(--Black, #011A17)",
					fontFamily: "Montserrat",
					fontSize: "14px",
					lineHeight: "22px",
					letterSpacing: "0.35px",
				}}
			>
				<NavHashLink
					to={seccion}
					underline="hover"
					className="navegacion-texto"
				>
					{/* <Link underline="hover" color="text.primary"> */}
					{category}
					{/* </Link> */}
				</NavHashLink>

				<Typography
					sx={{
						color: "var(--Black, #011A17)",
						fontFamily: "Montserrat",
						fontSize: "14px",
						lineHeight: "22px",
						letterSpacing: "0.35px",
						fontWeight: "bold",
					}}
				>
					{name}
				</Typography>
			</Breadcrumbs>
			<Breadcrumbs
				separator="|"
				aria-label="breadcrumb"
				sx={{
					color: "var(--Black, #011A17)",
					fontFamily: "Montserrat",
					fontSize: "14px",
					lineHeight: "22px",
					letterSpacing: "0.35px",
				}}
				className="navegacion-siguiente"
			>
				<Link onClick={previo} underline="hover" color="text.primary">
					<span>&lt; </span>
					Previo
				</Link>
				<Link onClick={siguiente} underline="hover" color="text.primary">
					Siguiente
					<span> &gt; </span>
				</Link>
			</Breadcrumbs>
		</div>
	);
}
