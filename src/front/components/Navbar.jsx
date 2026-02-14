import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-blue text-white macondo-swash-caps-regular">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white macondo-swash-caps-regular">Relax</span>
				</Link>
				<div className="ml-auto">
					<Link to="/Register">
						<button className="btn btn-primary">registrate</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};