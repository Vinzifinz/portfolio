import "./SkillCard.css";
import FlipCard from "../FlipCard/Flipcard";
function SkillCard() {

	return (
		<>
		<div className="card-container">
			<FlipCard
				imageSrc="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg"
				altText="logo de html"
				name="HTML"
				description="Maîtrise des bases du HTML5 pour structurer des pages web à la mise en forme claire, sémantique, accessible et bien organisée. Mise en place des bonnes pratiques"
			/>
			<FlipCard
				imageSrc="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
				altText="logo de css"
				name="CSS"
				description="Connaissance de CSS3 pour styliser des interfaces responsives et modernes. Pratique des flexbox, grid, et animations pour améliorer l’expérience utilisateur."
			/>
			<FlipCard
				imageSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
				altText="logo de react"
				name="REACT"
				description=" Créations d'interfaces utilisateur dynamiques et modulaires. Utilisation des composants, props, state et du JSX pour construire des applications réactives côté client."
			/>
			<FlipCard
				imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
				altText="logo de javascript"
				name="JAVASCRIPT"
				description="Compétences en JavaScript pour dynamiser les pages web : manipulation du DOM, gestion des événements, fonctions asynchrones et logique de base côté client."
			/>
			<FlipCard
				imageSrc="/node-js-seeklogo.svg"
				altText="logo de node.js"
				name="NODE JS"
				description="Initiation à Node.js pour développer des applications web côté serveur. Utilisation de npm, création de serveurs simples avec Express, et manipulation de fichiers."
			/>
				<FlipCard
				imageSrc="/git-seeklogo.svg"
				altText="logo de Git"
				name="GIT"
				description="Utilisation de Git pour le versionnage de code. Création de branches, gestion des commits, résolution de conflits et suivi de l’historique des projets."
			/>
				<FlipCard
				imageSrc="/github-seeklogo.png"
				altText="logo de Github"
				name="GITHUB"
				description="Mise en ligne de projets sur GitHub, collaboration via pull requests, et gestion de dépôts publics/privés. Présentation de mon travail et suivi des contributions."
			/>
			<FlipCard
				imageSrc="/mysql-seeklogo.svg"
				altText="logo de mysql"
				name="MYSQL"
				description="Bases en MySQL pour concevoir et interroger des bases de données relationnelles : création de tables, requêtes SQL, jointures et gestion de données."
			/>
		</div>
		</>
	);
}

export default SkillCard;
