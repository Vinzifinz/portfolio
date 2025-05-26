import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header>
			<h1>
				Vincent <br /> Luccioni
			</h1>

			<nav className={`navbar ${isMenuOpen ? "open" : "hidden"}`}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/CV">CV</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>

			<button
				type="button"
				className="burger"
				value="burger-button"
				onClick={toggleMenu}
			>
				<span className={`burger-bar ${isMenuOpen ? "open" : ""}`} />
			</button>
		</header>
	);
}

export default Header;
