// FlipCard.jsx
import { useState } from "react";

type ImageProps = {
  imageSrc: string;
  altText: string;
  name: string;
  description: string;
}

function FlipCard( {imageSrc, altText, name, description }: ImageProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => setIsFlipped(prev => !prev);

	return (
		<div className="scene" onClick={handleClick}>
			<div className={`card ${isFlipped ? "is-flipped" : ""}`}>
				<div className="card__face card__face--front">
					<img src={imageSrc} alt={altText} />
				</div>
				<div className="card__face card__face--back">
          <h3>{name}</h3> 
          <p>{description}</p>
          </div>
			</div>
		</div>
	);
}

export default FlipCard;
