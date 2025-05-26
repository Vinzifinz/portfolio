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
					Issu d'une formation orienté marketing et communication avant de me diriger vers les sciences de l'éducation et une carrière dans la formation, j'ai d'abord expérimenté les solutions no-code avant de vite sentir leur limite. J'ai alors voulu en savoir plus sur le code en général et me suis d'abord intéressé à HTML et CSS et c'est comme ça que j'en suis arrivé à penser reconversion professionnelle dans le développement web. J'ai choisi le format Bootcamp de la Wild Code School afin d'acquérir
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
