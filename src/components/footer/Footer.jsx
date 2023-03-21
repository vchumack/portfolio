import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<>
			<h2>Contact Me</h2>
			<ul>
				<li>
					<Link href="/">Telegram</Link>
				</li>
				<li>
					<Link href="/">WhatsApp/Viber/Phone</Link>
				</li>
				<li>
					<Link href="/">Instagram</Link>
				</li>
				<li>
					<Link href="/">Email</Link>
				</li>
			</ul>
		</>
	);
};
