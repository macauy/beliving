import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { NavHashLink } from "react-router-hash-link";

export default function Navegacion({ category, name }) {
	const seccion = "/catalogo#" + category.toLowerCase();
	return (
		<div role="presentation">
			<Breadcrumbs
				separator=">"
				aria-label="breadcrumb"
				sx={{
					color: "var(--Black, #011A17)",
					fontFamily: "Montserrat",
					fontSize: "14px",
					lineHeight: "22px",
					letterSpacing: "0.35px",
				}}
			>
				<NavHashLink to={seccion}>
					<Link underline="hover" color="text.primary">
						{category}
					</Link>
				</NavHashLink>

				<Typography
					sx={{
						color: "var(--Black, #011A17)",
						fontFamily: "Montserrat",
						fontSize: "14px",
						lineHeight: "22px",
						letterSpacing: "0.35px",
					}}
				>
					{name}
				</Typography>
			</Breadcrumbs>
		</div>
	);
}
