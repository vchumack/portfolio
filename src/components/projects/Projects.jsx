import { projectList } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const harly = "/public/img/harly1.png";

import styles from "./Projects.module.scss";

export const Projects = () => {
	return (
		<section id="Projects" className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<h2>Projects</h2>
				<ul className={styles.projectList}>
					{projectList.map((el) => (
						<li key={el.path}>
							<div>
								<Link href={`/projects/${el.path}`}>
									<Image
										src={el.img}
										width="200"
										height="auto"
										alt="logo"
									/>
									<p>{el.name}</p>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.imgBox}>
				<Image src={harly} alt="dragon" width="200" height="200" />
			</div>
		</section>
	);
};
