import { useState } from "react";
import "./SkillCard.css";
function SkillCard() {
	const [isFlipped, setIsFlipped] = useState (false)

	const handleClick = ()=> {
		setIsFlipped (prev=>!prev)
	}
	return (
		<>
			{/*<h3>Front-End</h3>
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
			</div>*/}
		<div className="card-container">
  <div className="scene">
    <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleClick}>
      <div className="card__face card__face--front">
        <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg" alt="logo de html" />
      </div>
      <div className="card__face card__face--back">
				<h3>HTML</h3>
				<ul>
					<li>Introduction au HTML</li>
					<li>La balise head </li>
					<li>L'écrit sous toutes ses formes</li>
					<li>Les liens hypertexte</li>
					<li>Structure et sémantique</li>
					<li>Multimédias</li>
					<li>Les formulaires</li>
					<li>Les tableaux</li>
					<li>Performance & Structure</li>
				</ul>
				</div>
    </div>
  </div>

  <div className="scene">
    <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleClick}>
      <div className="card__face card__face--front">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="logo de css" />
      </div>
      <div className="card__face card__face--back">back</div>
    </div>
  </div>

  <div className="scene">
    <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleClick}>
      <div className="card__face card__face--front">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo de react" />
      </div>
      <div className="card__face card__face--back">back</div>
    </div>
  </div>

  <div className="scene">
    <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleClick}>
      <div className="card__face card__face--front">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="logo de javascript" />
      </div>
      <div className="card__face card__face--back">back</div>
    </div>
  </div>
</div>

		</>
	);
}

export default SkillCard;
