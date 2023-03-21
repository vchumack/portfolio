import { projectList } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";

export const Projects = () => {
	return (
		<div className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<h2>Projects</h2>
				<ul>
					{projectList.map((el) => (
						<li key={el.path}>
							<Link href={`/projects/${el.path}`}>
								<Image
									src=""
									width="auto"
									height="auto"
									alt=""
								/>
								<p>{el.name}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
