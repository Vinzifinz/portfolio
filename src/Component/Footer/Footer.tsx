import { Link } from "react-router";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section className="info">
				<Link to="/home">
					Luccioni Vincent
					<br /> Developer Web FullStack
					<br />
					Debutant
				</Link>
			</section>
			<section className="social-media">
				<Link
					to="https://www.linkedin.com/in/vincent-luccioni-2975a5176/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/linkedin.svg" alt="logo linkedin" />
				</Link>
				<Link
					to="https://github.com/Vinzifinz"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/github.svg" alt="logo github" />
				</Link>
				<Link
					to="https://www.wildcodeschool.com/formation-developpeur-web-full-stack"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/wild-code-school.svg" alt="logo wild" />
				</Link>
			</section>
			<section className="copyright">
				<p>Copyright 2025</p>
			</section>
		</div>
	);
}

export default Footer;
