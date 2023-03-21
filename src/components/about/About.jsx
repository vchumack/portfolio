import styles from "./About.module.scss";

export const About = () => {
	return (
		<div className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<div>
					<h1>Valeriya Druchinina</h1>
					<h2>Full-stack developer</h2>
					<p>
						Hi, {"I'm"} Valerie. {"I'm"} looking for the job of my
						dreams, in my person you will also find a dream
						colleague. Responsible, active, creative, inspired by
						vanilla&&hard coding and growthing in the world of
						HTML5, CSS3, JS, React, SQL, Node.js.
					</p>
					<p>
						{"I'm"} excited to work on new projects and expand my
						skills!
					</p>
				</div>
			</div>
		</div>
	);
};
