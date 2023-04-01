import Burger from "../burger/Burger";
import Navbar from "../navbar/Navbar";
import Subnav from "../subnav/Subnav";

import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpen, toggle }) => {
	return (
		<div className={isOpen ? styles.open : styles.closed}>
			<div className={styles.section}>
				<div className="container">
					<div className={styles.main}>
						<Burger isOpen={isOpen} toggle={toggle} />
					</div>
					<Navbar toggle={toggle} />
					<Subnav toggle={toggle} />
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
