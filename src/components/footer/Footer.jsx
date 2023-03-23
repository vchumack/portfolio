import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<div className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<h2>Contact Me</h2>
				<ul className={styles.contactList}>
					<li>
						<Link href="https://t.me/ler_i" target="_blank">
							Telegram
						</Link>
					</li>
					<li>
						<div>
							<p>
								<Link href="https://wa.me/380988662213">
									WhatsApp/
								</Link>
								<Link href="viber://chat?number=380988662213">
									Viber/
								</Link>
								Phone
							</p>
							<Link href="tel:+380988662213">
								+(380)98 866 22 13
							</Link>
						</div>
					</li>
					<li>
						<Link
							href="https://www.instagram.com/ler_i/"
							target="_blank"
						>
							Instagram
						</Link>
					</li>
					<li>
						<Link href="mailto:vchumack2ne1@gmail.com">Email</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
