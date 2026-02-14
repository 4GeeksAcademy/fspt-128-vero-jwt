import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<>	
			<Link to ="/register">
				<span className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">no estas registrado?? a que esperas</span>
			</Link> <br />
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white macondo-swash-caps-regular">zona de confort logueate</span>
			</Link>

		</>
	</footer >
);
