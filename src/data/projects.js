import glMedia from "../../public/img/glMedia1.jpg";
import oniTech from "../../public/img/oniTech.jpg";
import myd from "../../public/img/myd.jpg";
import careYourPets from "../../public/img/careYourPets.jpg";
import readingPractice from "../../public/img/readingPractice.jpg";
import whatToWatch from "../../public/img/whatToWatch.jpg";

export const projectList = [
	{
		path: "gl_media",
		name: "GL-Media",
		ref: "https://www.glmedia.org/",
		github: "https://github.com/vchumack/glmedia",
		description:
			"A one-page website for a web studio made with Next.js, React, and Sass. Implemented adaptation to all devices, multi-language and order processing in Google Docs and telegram ",
		technologies: "Next.js, React, Sass",
		roleOnTheProject: "Design, Content writing, Frontend development",
		img: glMedia,
	},

	{
		path: "oni_tech",
		name: "Oni.Tech",
		ref: "https://oni-tech.netlify.app/",
		github: "https://github.com/vchumack/Oni.Tech",
		description:
			"A website that provides MVP products, design, and analytics services",
		technologies: "React, React Hook Form, Sass",
		roleOnTheProject: "Frontend development",
		img: oniTech,
	},
	{
		path: "myd",
		name: "MYD",
		ref: "https://myd-ten.vercel.app/",
		github: "https://github.com/Lluitiy/myd",
		description:
			"A one-page website for a studio that provides website development services",
		technologies: "React, Next.js, React Hook Form, Sass",
		roleOnTheProject: "Frontend development",
		img: myd,
	},
	{
		path: "care_your_pets",
		name: "Care Your Pets",
		ref: "https://care-your-pets.netlify.app/",
		github: "https://github.com/vchumack/petsSupport_front",
		description:
			"A full-fledged full-stack application created like a social network where the user can register and exhibit their animals as in their profile and for sale. There is also a category listing board for buying, finding, and gifting pets.",
		technologies:
			"React, MongoDB, Node.js, Redux, Sass, Registration/Authorization",
		roleOnTheProject:
			"Team Leader, Organization of the project structure, Frontend development, Backend development",
		img: careYourPets,
	},
	{
		path: "reading_practice",
		name: "Reading Practice",
		ref: "https://team-slice.netlify.app/",
		github: "https://github.com/vchumack/ReadingPractice",
		description:
			"A team project to improve your reading skills. Implemented with React,Redux, Webpack and various libraries.",
		technologies:
			"React, Redux, Routing, Emotion, Registration/Authorization",
		roleOnTheProject: "Scrum master, Frontend development",
		img: readingPractice,
	},
	{
		path: "what_to_watch",
		name: "What To Watch",
		ref: "https://vchumack.github.io/whatToWatch/",
		github: "https://github.com/vchumack/whatToWatch/",
		description:
			"A simple application that displays information about popular movies, as well as the ability to search for movies by title and explore information about the cast and reviews of it. Created with React.",
		technologies: "React, Routing, Emotion",
		roleOnTheProject: "Frontend development",
		img: whatToWatch,
	},
];
