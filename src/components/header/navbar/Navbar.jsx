import Link from "next/link";
import { navbar } from "@/data/header";

import styles from "./Navbar.module.scss";

const Navbar = ({ toggle }) => {
	return (
		<nav>
			<ul className={styles.list}>
				{navbar.map((el) => (
					<li key={el} className={styles.item}>
						<Link href={`#${el}`} scroll={false} onClick={toggle}>
							{el}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
