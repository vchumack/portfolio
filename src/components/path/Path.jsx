import styles from "./Path.module.scss";

export const Path = () => {
	return (
		<div className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<h2>My Path</h2>
				<div className={styles.grid}>
					<div className={styles.number}>
						<h3>1</h3>
					</div>
					<div className={`${styles.textRight}`}>
						<h3>Education</h3>
						<p>
							My first education was in <span>psychology</span>,
							but the second time around I seriously decided to
							become <span>a programmer</span>.
						</p>
					</div>
					<div className={`${styles.textLeft}`}>
						<h3>Experience</h3>
						<p>
							I have dedicated over <span>10 years</span> of my
							life to <span>social media marketing</span>,
							studying <span>sales funnels</span>, and
							understanding the{" "}
							<span>needs of the target audience</span>, which
							still helps me today.
						</p>
					</div>
					<div className={styles.number}>
						<h3>2</h3>
					</div>
					<div className={styles.number}>
						<h3>3</h3>
					</div>

					<div className={`${styles.textRight}`}>
						<h3>Achievements</h3>
						<ul>
							<li>
								<span>Assembled</span> and trained a{" "}
								<span>team of professionals</span>;
							</li>
							<li>
								Successfully conducted over{" "}
								<span>50 negotiations</span>;
							</li>
							<li>
								Supervised about{" "}
								<span>50 ongoing projects</span>;
							</li>
							<li>
								Organized over{" "}
								<span>50 successful video shoots</span>.
							</li>
						</ul>
					</div>

					<div className={`${styles.textLeft}`}>
						<h3>Programming</h3>
						<p>
							<b>Commercial experience:</b> I have created several
							websites using WordPress, as well as{" "}
							<span>several websites</span> using{" "}
							<span>HTML, CSS, JS, React, and Next.js.</span> For
							some projects, I also developed content based on my
							marketing experience.
						</p>
						<p>
							I have experience both working independently and as
							part of a team, where I often acted as a{" "}
							<span>team leader</span>.
						</p>
						<p>
							I also have several personal projects and
							educational projects.
						</p>
					</div>
					<div className={styles.number}>
						<h3>4</h3>
					</div>

					<div className={styles.line}></div>
				</div>
			</div>
		</div>
	);
};
