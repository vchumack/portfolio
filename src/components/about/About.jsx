import Image from "next/image";

import leri from "../../../public/img/leri.jpg";

import styles from "./About.module.scss";

export const About = () => {
	return (
		<section id="About" className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<div className={styles.infoBox}>
					<div className={styles.element}></div>
					<h1>Hi, {"I'm"} Valeri</h1>
					<h2>Full-stack developer</h2>
					{/* <Image src={leri} alt="leri" width="100" height="100" /> */}

					<p>
						I create websites, various interfaces, and web
						applications.
					</p>
					<p>
						Responsible, active, creative, inspired by vanilla&&hard
						coding and growthing in the world of
						<span> HTML, CSS, JS, React, Next.js, Node.js</span>.
					</p>
				</div>
			</div>
		</section>
	);
};
