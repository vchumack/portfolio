import Link from "next/link";
import { useRouter } from "next/router";
import { projectList } from "../../data/projects.js";

import styles from "./HeaderPages.module.scss";
import Subnav from "./subnav/Subnav.jsx";

export const HeaderPages = () => {
	const { query } = useRouter();
	const positionProject = projectList.findIndex(
		(project) => project.path === query.path
	);

	const getNextPage = () => {
		if (positionProject === projectList.length - 1)
			return projectList[0].path;

		return projectList[positionProject + 1].path;
	};

	return (
		<header className={styles.header}>
			<div className={`container ${styles.container}`}>
				<nav>
					<div>
						<Link href="/" className={styles.link}>
							Home
						</Link>

						<Link
							href={`/projects/${getNextPage()}`}
							className={styles.link}
						>
							Next Project
						</Link>
					</div>
					<Subnav />
				</nav>
			</div>
		</header>
	);
};
