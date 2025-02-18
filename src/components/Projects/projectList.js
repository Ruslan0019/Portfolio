import TikMaker from "@/../../public/assets/img/tikmaker.png";
import portfolio from "@/../../public/assets/img/portfolio.png";
import Yacht from "@/../../public/assets/img/Yacht.png";
import Bookshelf from "@/../../public/assets/img/Bookshelf.png";
import javaScript from "../../../public/assets/svg/javaScript.svg";
import html5 from "../../../public/assets/svg/html5.svg";
import react from "../../../public/assets/svg/react.svg";
import git from "../../../public/assets/svg/git.svg";
import css3 from "../../../public/assets/svg/css3.svg";
import figma from "../../../public/assets/svg/figma.svg";
import nextJS from "../../../public/assets/svg/nextJS.svg";
import tailwindCSS from "../../../public/assets/svg/tailwindCSS.svg";
// import mongoDB from "../../../public/assets/svg/mongoDB.svg";
// import nodeJS from "../../../public/assets/svg/nodeJS.svg";

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
      "Lorem ipsum dolor sit amet. Qui consequatur rerum eum assumenda accusamus et fuga numquam quo reprehenderit sequi...",
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
      "Lorem ipsum dolor sit amet. Qui consequatur rerum eum assumenda accusamus et fuga numquam quo reprehenderit sequi...",
    image: portfolio,
    link: "https://portfolio-flax-seven-83.vercel.app/",
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
      "Lorem ipsum dolor sit amet. Qui consequatur rerum eum assumenda accusamus et fuga numquam quo reprehenderit sequi...",
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
      "Lorem ipsum dolor sit amet. Qui consequatur rerum eum assumenda accusamus et fuga numquam quo reprehenderit sequi...",
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
