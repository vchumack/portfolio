import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { HeaderPages } from "@/components/header/HeaderPages";
import { projectList } from "@/data/projects";

import styles from "@/styles/projects.module.scss";

export default function Project({ project }) {
	const {
		name,
		ref,
		github,
		description,
		technologies,
		roleOnTheProject,
		img,
	} = project;

	return (
		<>
			<Head>
				<title>Portfolio Web Developer</title>
				<meta name="description" content="Portfolio Web Developer" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderPages />
			<section className={`section ${styles.section}`}>
				<div className={`container ${styles.container}`}>
					<h1 className={styles.title}>{name}</h1>

					<div className={styles.linkList}>
						<Link href={ref} target="_blank">
							Site
						</Link>
						<Link href={github} target="_blank">
							GitHub
						</Link>
					</div>
					<p className={styles.description}>{description}</p>
					<p>
						<b>The Technology Stack: </b>
						<span>{technologies}</span>{" "}
					</p>
					<p>
						<b>Project Role/Activity:</b>{" "}
						<span>{roleOnTheProject}</span>{" "}
					</p>

					<div>
						<Image
							alt="projects logo"
							src={img}
							width={2048}
							height={1365}
						/>
					</div>
				</div>
				<div className={styles.imgBox}>
					<Image
						src="/static/img/dart.png"
						width={353}
						height={707}
						alt="Darth Vader as a programmer"
					/>
				</div>
			</section>
		</>
	);
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
	const result = projectList.find((el) => el.path === params.path);

	return {
		// Passed to the page component as props
		props: { project: result },
	};
}

export async function getStaticPaths() {
	return {
		paths: projectList.map(({ path }) => ({ params: { path } })),
		fallback: false, // can also be true or 'blocking'
	};
}
