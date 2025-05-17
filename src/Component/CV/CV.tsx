import "./CV.css";

function CV() {
	return (
		<>
			<div className="titre">
				<h2>Curriculum Vitae</h2>
			</div>
			<div className="cv-container">
				<p>
					Après 17 ans dans la formation et 1 ou 2 expériences autodidactes
					enthousiasmantes dans la création de site internet notamment avec des
					solutions no-code comme Wordpress, j'ai fait le choix de réorienter
					mon parcours professionnel et de me consacrer pleinement à la carrière
					de Developer Web.
				</p>
				<img
					src="/Web-developer.svg"
					alt="CV de Vincent Luccioni à télécharger"
				/>
				<a href="/Web-developer.pdf" download>
					Telecharger
				</a>
			</div>
		</>
	);
}

export default CV;
