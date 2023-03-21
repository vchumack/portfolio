import { techskillsList } from "@/data/techskills";

import styles from "./TechSkills.module.scss";

export const TechSkills = () => {
	return (
		<div className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<div>
					<h2>Tech Skills</h2>
					<ul>
						{techskillsList.map((el) => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
