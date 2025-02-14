import TikMaker from "@/../../public/assets/img/tikMaker.webp";
import portfolio from "@/../../public/assets/img/portfolio.png";
import Yacht from "@/../../public/assets/img/Yacht.png";
import Bookshelf from "@/../../public/assets/img/Bookshelf.png";

import Image from "next/image";

import react from "@/../../public/assets/svg/react.svg";
import javaScript from "@/../../public/assets/svg/javaScript.svg";

const projectList = [
  {
    id: 1,
    name: "Tikmaker",
    category: "WEB DEVELOPMENT",
    description:
      "Lorem ipsum dolor sit amet. Qui consequatur rerum eum assumenda accusamus et fuga numquam quo reprehenderit sequi...",
    image: TikMaker,
    link: "https://tikmaker.app/",
    tech: [
      {
        icon: <Image src={react} alt="react" width={25} className="h-auto" />,
        name: "React",
      },
      {
        icon: (
          <Image
            src={javaScript}
            alt="javaScript"
            width={25}
            className="h-auto"
          />
        ),
        name: "JavaScript",
      },
      {
        icon: "",
        name: "HTML5",
      },
      { icon: "", name: "CSS3" },
      { icon: "", name: "Next.js" },
      {
        icon: "",
        name: "Netlify",
      },
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
    tech: [
      { icon: "", name: "React" },
      {
        icon: "",
        name: "JavaScript",
      },
      {
        icon: "",
        name: "HTML5",
      },
      { icon: "", name: "CSS3" },
      { icon: "", name: "Next.js" },
      { icon: "", name: "Vercel" },
      {
        icon: "",
        name: "Tailwind CSS",
      },
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
    tech: [
      {
        icon: "",
        name: "JavaScript",
      },
      {
        icon: "",
        name: "HTML5",
      },
      { icon: "", name: "CSS3" },
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
    tech: [
      {
        icon: "",
        name: "JavaScript",
      },
      {
        icon: "",
        name: "HTML5",
      },
      { icon: "", name: "CSS3" },
    ],
  },
];
export default projectList;
