import { FaReact } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import { SiCss3 } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import TikMaker from "@/../../public/assets/img/tikMaker.webp";
import portfolio from "@/../../public/assets/img/portfolio.png";
import Yacht from "@/../../public/assets/img/Yacht.png";
import Bookshelf from "@/../../public/assets/img/Bookshelf.png";

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
      { icon: <FaReact size={25} className=" text-blue-500" />, name: "React" },
      {
        icon: <FaJs size={25} className=" text-[#FFD600]" />,
        name: "JavaScript",
      },
      {
        icon: <TfiHtml5 size={25} className=" text-[#E7A42B]" />,
        name: "HTML5",
      },
      { icon: <SiCss3 size={25} className=" text-[#2AA4F4]" />, name: "CSS3" },
      { icon: <RiNextjsFill size={25} />, name: "Next.js" },
      {
        icon: <SiNetlify size={25} className=" text-[#218d8b]" />,
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
      { icon: <FaReact size={25} className=" text-blue-500" />, name: "React" },
      {
        icon: <FaJs size={25} className=" text-[#FFD600]" />,
        name: "JavaScript",
      },
      {
        icon: <TfiHtml5 size={25} className=" text-[#E7A42B]" />,
        name: "HTML5",
      },
      { icon: <SiCss3 size={25} className=" text-[#2AA4F4]" />, name: "CSS3" },
      { icon: <RiNextjsFill size={25} />, name: "Next.js" },
      { icon: <IoLogoVercel size={25} />, name: "Vercel" },
      {
        icon: <RiTailwindCssFill size={25} className=" text-[#00ACC1]" />,
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
        icon: <FaJs size={25} className=" text-[#FFD600]" />,
        name: "JavaScript",
      },
      {
        icon: <TfiHtml5 size={25} className=" text-[#E7A42B]" />,
        name: "HTML5",
      },
      { icon: <SiCss3 size={25} className=" text-[#2AA4F4]" />, name: "CSS3" },
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
        icon: <FaJs size={25} className=" text-[#FFD600]" />,
        name: "JavaScript",
      },
      {
        icon: <TfiHtml5 size={25} className=" text-[#E7A42B]" />,
        name: "HTML5",
      },
      { icon: <SiCss3 size={25} className=" text-[#2AA4F4]" />, name: "CSS3" },
    ],
  },
];
export default projectList;
