import Image from "next/image";
import { techskillsList } from "@/data/techskills";
import { softskillsList } from "@/data/softskills";

import styles from "./Skills.module.scss";

export const Skills = () => {
	return (
		<section id="Skills" className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<div>
					<h2>Tech Skills</h2>
					<ul className={styles.skillList}>
						{techskillsList.map((el) => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</div>

				<div>
					<h2>Soft Skills</h2>
					<ul className={styles.skillList}>
						{softskillsList.map((el) => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.imgBox}>
				<Image
					src="/static/img/dragon.png"
					alt="Space Dragon as a programmer"
					width={499}
					height={499}
				/>
			</div>
		</section>
	);
};
