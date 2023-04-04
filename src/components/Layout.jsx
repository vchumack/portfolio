import { Itim } from "next/font/google";
import { Footer } from "@/components/footer/Footer";

const itim = Itim({
	subsets: ["latin"],
	weight: ["400"],
});

const Layout = ({ children }) => {
	return (
		<>
			<style jsx global>
				{`
					html {
						font-family: ${itim.style.fontFamily};
					}
				`}
			</style>
			<main> {children}</main>
			<Footer />
		</>
	);
};

export default Layout;
