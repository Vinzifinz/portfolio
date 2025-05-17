import { useState } from "react";
import "./Contact.css";

function Contact() {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [phone, setPhone] = useState("");
	const [company, setCompany] = useState("");
	const [message, setMessage] = useState("");
	const [output, setOutput] = useState("");

	function isValidEmail(email: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	const handleSubmit = () => {
		if (name.trim() === "") {
			setOutput("Merci d'indiquer votre nom");
		} else if (mail.trim() === "") {
			setOutput("Merci de renseigner une adresse mail");
		} else if (!isValidEmail(mail.trim())) {
			setOutput("Merci d'indiquer une adresse mail valide");
		} else if (message.trim() === "") {
			setOutput("Veuillez préciser votre demande");
		} else {
			setOutput("Votre message a bien été envoyé !");
			setName("");
			setMail("");
			setPhone("");
			setCompany("");
			setMessage("");
		}
	};

	return (
		<div className="form-container">
			<h2>Contact</h2>
			<p className="paragraphe-form">
				Vous avez un projet en tête ou une question à me poser ? N'hésitez pas à
				me contacter, je serai ravi d'en discuter avec vous. Je suis ouvert aux
				opportunités professionnelles, collaborations et missions freelance.
				Chaque message est lu avec attention, et je m'efforce de répondre
				rapidement. Vous pouvez me joindre via le formulaire ci-dessous. À très
				bientôt !
			</p>
			<section className="message">
				<form id="form" onSubmit={(e) => e.preventDefault()}>
					<h3>Laissez-moi un message</h3>
					<p>
						<output id="outputMessage">{output}</output>
					</p>

					<input
						aria-label="nom"
						type="text"
						placeholder="Nom*"
						name="nom"
						id="name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						aria-label="email"
						type="email"
						placeholder="Exemple@mail.com*"
						name="mail"
						id="mail"
						required
						value={mail}
						onChange={(e) => setMail(e.target.value)}
					/>
					<input
						aria-label="téléphone"
						type="number"
						placeholder="Téléphone (facultatif)"
						name="telephone"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<input
						aria-label="entreprise"
						type="text"
						placeholder="Entreprise (facultatif)"
						name="entreprise"
						id="Compagny"
						value={company}
						onChange={(e) => setCompany(e.target.value)}
					/>
					<textarea
						aria-label="message"
						className="input"
						placeholder="Votre message*"
						name="message"
						id="message"
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>

					<section className="button">
						<button type="button" id="sendButton" onClick={handleSubmit}>
							Envoyer
						</button>
					</section>
				</form>
			</section>
		</div>
	);
}

export default Contact;
