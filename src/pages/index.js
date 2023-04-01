import Head from "next/head";

import { Header } from "@/components/header/Header";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Path } from "@/components/path/Path";

export default function Home() {
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
			<Header />
			<About />
			<Skills />
			<Path />
			<Projects />
		</>
	);
}
