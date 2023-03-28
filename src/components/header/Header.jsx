import Image from "next/image";
import { useEffect, useState } from "react";
import { useMedia } from "@/shared/hooks/useMedia";
import { removeScroll } from "@/shared/functions/removeScroll";
import { toggler } from "@/shared/functions/toggler";

import leri from "../../../public/img/leri.jpg";

import Navbar from "./navbar/Navbar";
import Subnav from "./subnav/Subnav";
import Burger from "./burger/Burger";
import BurgerMenu from "./burgerMenu/BurgerMenu";

import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

export const Header = () => {
	const isMobile = useMediaQuery({ maxWidth: 767.9 });
	const [isOpen, setIsOpen] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		removeScroll(isOpen);
	}, [isOpen]);

	const toggleBurger = () => {
		toggler(setIsOpen, isOpen);
	};

	return (
		<header className={styles.header}>
			{isClient && (
				<div className={`container ${styles.container}`}>
					{!isMobile ? (
						<>
							<Navbar />
							<Subnav />
						</>
					) : (
						<>
							<Burger isOpen={isOpen} toggle={toggleBurger} />
							<BurgerMenu
								isOpen={isOpen}
								setIsOpen={setIsOpen}
								toggle={toggleBurger}
							/>
						</>
					)}
				</div>
			)}
		</header>
	);
};
