import Link from "next/link";

import styles from "./Subnav.module.scss";

const Subnav = ({ toggle }) => {
	return (
		<div className={styles.wrapper}>
			<Link
				href="#Contacts"
				className={styles.contact}
				scroll={false}
				onClick={toggle}
			>
				Contact Me
			</Link>
		</div>
	);
};

export default Subnav;
