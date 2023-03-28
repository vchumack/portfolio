import Image from "next/image";
import { techskillsList } from "@/data/techskills";
import { softskillsList } from "@/data/softskills";

import dragon from "../../../public/img/dragon1.png";

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
				<Image src={dragon} alt="dragon" width="200" height="200" />
			</div>
		</section>
	);
};
