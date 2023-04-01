import Link from "next/link";
import { BsInstagram, BsWhatsapp, BsPhone } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SiViber } from "react-icons/si";

import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer id="Contacts" className={`section ${styles.footer}`}>
			<div className={`container ${styles.container}`}>
				<h2>Contact Me</h2>
				<ul className={styles.contactList}>
					<li>
						<Link href="https://t.me/ler_i" target="_blank">
							<FaTelegramPlane />
							Telegram
						</Link>
					</li>
					<li>
						<div className={styles.linksBox}>
							<div>
								<Link href="https://wa.me/380988662213">
									<BsWhatsapp />
									WhatsApp
								</Link>
								<Link href="viber://chat?number=380988662213">
									<SiViber />
									Viber
								</Link>
								<Link href="tel:+380988662213">
									<BsPhone />
									Phone
								</Link>
							</div>
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
							<BsInstagram />
							Instagram
						</Link>
					</li>
					<li>
						<Link href="mailto:vchumack2ne1@gmail.com">
							<MdAlternateEmail />
							Email
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
