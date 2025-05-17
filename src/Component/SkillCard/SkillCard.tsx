import "./SkillCard.css";
function SkillCard() {
	return (
		<>
			<h3>Front-End</h3>
			<div className="skill-card-frontend">
				<article className="skill-card-html">
					<img
						src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg"
						alt="logo de html"
					/>
				</article>
				<article className="skill-card-css">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
						alt="logo de css"
					/>
				</article>
				<article className="skill-card-react">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
						alt="logo de react"
					/>
				</article>
				<article className="skill-card-js">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
						alt="Logo de javaScript"
					/>
				</article>
			</div>
			<div className="skill-card-Backend">
				<h3>Back-End</h3>
				<article className="skill-card-node">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
						alt="logo de node.js"
					/>
				</article>
			</div>
		</>
	);
}

export default SkillCard;
