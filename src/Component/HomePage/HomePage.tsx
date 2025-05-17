import SkillCard from "../SkillCard/SkillCard";
import "./HomePage.css";

function HomePage() {
	return (
		<>
			<section className="about">
				<h2>
					Developer Web <br />
					Full Stack <br />
					Débutant
				</h2>
				<p>
					J'ai choisi le format Bootcamp de la Wild Code School afin d'acquérir
					de nouvelles compétences dans le développement Web et de consolider
					mes connaissances dans ce domaine.
				</p>
			</section>
			<section className="skill">
				<h2>competences</h2>
				<SkillCard />
			</section>
			<section className="realisation">
				<h2>realisations</h2>
			</section>
		</>
	);
}

export default HomePage;
