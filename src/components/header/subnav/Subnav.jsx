import Link from "next/link";

import styles from "./Subnav.module.scss";

const Subnav = ({ toggle }) => {
	return (
		<div className={styles.wrapper}>
			<Link
				href="https://www.instagram.com/ler_i/"
				className={styles.contact}
				scroll={false}
				onClick={toggle}
				target="_blank"
			>
				Contact Me
			</Link>
		</div>
	);
};

export default Subnav;
