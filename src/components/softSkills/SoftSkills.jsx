import { softskillsList } from "@/data/softskills";

import styles from "./SoftSkills.module.scss";

export const SoftSkills = () => {
	return (
		<div className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<div>
					<h2>Soft Skills</h2>
					<ul>
						{softskillsList.map((el) => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
