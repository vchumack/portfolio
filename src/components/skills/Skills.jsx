import Image from "next/image";
import dragon from "../../../public/img/dragon.png";
import { techskillsList } from "@/data/techskills";
import { softskillsList } from "@/data/softskills";

import styles from "./Skills.module.scss";

export const Skills = () => {
	return (
		<div className={`section ${styles.section}`}>
			{/* <Image src={dragon} alt="dragon" width="300" height="300" /> */}
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
		</div>
	);
};
