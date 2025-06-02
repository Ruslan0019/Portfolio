import TikMaker from "../../../public/assets/img/tikmaker.png";
import portfolio from "../../../public/assets/img/portfolio.png";
import Yacht from "../../../public/assets/img/Yacht.png";
import Bookshelf from "../../../public/assets/img/Bookshelf.png";
import javaScript from "../../../public/assets/svg/javaScript.svg";
import html5 from "../../../public/assets/svg/html5.svg";
import react from "../../../public/assets/svg/react.svg";
import git from "../../../public/assets/svg/git.svg";
import css3 from "../../../public/assets/svg/css3.svg";
import figma from "../../../public/assets/svg/figma.svg";
import nextJS from "../../../public/assets/svg/nextJS.svg";
import tailwindCSS from "../../../public/assets/svg/tailwindCSS.svg";

const techStack = {
  JavaScript: { name: "JavaScript", image: javaScript },
  HTML5: { name: "HTML5", image: html5 },
  React: { name: "React", image: react },
  Git: { name: "Git", image: git },
  CSS3: { name: "CSS3", image: css3 },
  Figma: { name: "Figma", image: figma },
  NextJS: { name: "Next.js", image: nextJS },
  TailwindCSS: { name: "Tailwind CSS", image: tailwindCSS },
};

const projectList = [
  {
    id: 1,
    name: "Tikmaker",
    category: "WEB DEVELOPMENT",
    description:
      "\nTikMaker.app is a web application for content creation. The project is fully developed from scratch, with a focus on performance optimization and SEO.\n\n✅Frontend Development — independently implemented the entire UI/UX, responsive design, and backend integration.\n✅Next.js for SEO — migrated the project to Next.js to improve search engine indexing.\n✅Multilingual Support — implemented support for multiple languages.\n✅Dev Environment Setup — optimized the build process and automated deployment workflows.\n✅SEO Optimization — configured meta tags, Open Graph, schema.org, and other SEO metrics.\n✅Performance Optimization — reduced page load time and improved caching.",
    image: TikMaker,
    link: "https://tikmaker.app/",
    linkCode: "",
    tech: [
      techStack.JavaScript,
      techStack.NextJS,
      techStack.Figma,
      techStack.CSS3,
      techStack.Git,
      techStack.React,
      techStack.HTML5,
    ],
  },

  {
    id: 2,
    name: "Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "\nThis is a personal portfolio created to showcase my web development skills. The project was built using best practices and patterns, focusing on high performance and quality UI/UX.\n\n✅ Next.js + Tailwind CSS — an efficient combination for fast development and optimized performance.\n✅ Responsive Design — the portfolio is fully adaptable to all devices./High Performance — optimized the site for maximum loading speed.\n✅ SEO Optimization — configured meta tags and other parameters to improve indexing.\n✅ Best Practices — followed modern development patterns for clean and scalable code.",
    image: portfolio,
    link: "https://ruslan-afanasiev.vercel.app/",
    linkCode: "https://github.com/Ruslan0019/Portfolio",
    tech: [
      techStack.TailwindCSS,
      techStack.JavaScript,
      techStack.NextJS,
      techStack.Figma,
      techStack.CSS3,
      techStack.Git,
      techStack.React,
      techStack.HTML5,
    ],
  },
  {
    id: 3,
    name: "Yacht adventures",
    category: "WEB DEVELOPMENT",
    description:
      "\nYacht adventures is a team-based educational project developed during my studies at GoIT. The main focus was on layout development using HTML and CSS, as well as working with Git and organizing the workflow through Trello. The design was created in Figma, and we translated it into code.\n\n✅ Implemented the UI layout based on the Figma design\n✅ Worked with team branches in Git\n✅ Used Trello for task management\n✅ Collaborated and coordinated with the team",
    image: Yacht,
    link: "https://lakanna.github.io/bestteam-ourteam/index.html",
    linkCode: "https://github.com/Lakanna/bestteam-ourteam",
    tech: [
      techStack.HTML5,
      techStack.CSS3,
      techStack.Figma,
      techStack.JavaScript,
      techStack.Git,
    ],
  },
  {
    id: 4,
    name: "Bookshelf",
    category: "WEB DEVELOPMENT",
    description:
      "\nBookshelf is the second team project, where we also utilized JavaScript to implement interactive features. As in the previous project, we worked with Git, Trello, and transferred the design from Figma into code.\n\n✅ Developed and styled the UI based on the Figma design\n✅ Implemented functionality using vanilla JavaScript\n✅ Worked with Git and managed branches\n✅ Coordinated team efforts using Trello",
    image: Bookshelf,
    link: "https://bonny-art.github.io/it-frogs-tp-02/index.html",
    linkCode: "https://github.com/bonny-art/it-frogs-tp-02",
    tech: [
      techStack.HTML5,
      techStack.CSS3,
      techStack.Figma,
      techStack.JavaScript,
      techStack.Git,
    ],
  },
];
export default projectList;
