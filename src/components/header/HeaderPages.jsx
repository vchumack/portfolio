import Link from "next/link";

import styles from "./HeaderPages.module.scss";

export const HeaderPages = () => {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.container}`}>
				<nav>
					<Link href="/" className={styles.link}>
						Home
					</Link>
				</nav>
			</div>
		</header>
	);
};
