import Image from "next/image";
import Link from "next/link";
import { projectList } from "@/data/projects";

import styles from "./Projects.module.scss";

const harly = "/static/img/harley.png";

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
										className={styles.projectImg}
										src={el.img}
										width={2048}
										height={1365}
										alt="project logos"
									/>
									<p>{el.name}</p>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.imgBox}>
				<Image
					src={harly}
					width={499}
					height={499}
					alt="Harley Quinn as a programmer"
				/>
			</div>
		</section>
	);
};
