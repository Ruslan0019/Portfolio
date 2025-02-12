import Image from "next/image";
import React from "react";
import JsIcon from "@/../../public/assets/svg/js.icon.svg";
import ReactIcon from "@/../../public/assets/svg/react.icon.svg";
import NextJsIcon from "@/../../public/assets/svg/next.js.icon.svg";
import FigmaIcon from "@/../../public/assets/svg/figma.icon.svg";
import NodeJsIcon from "@/../../public/assets/svg/node.js.icon.svg";
import MangoDBIcon from "@/../../public/assets/svg/MangoDB.icon.svg";
import HTML5Icon from "@/../../public/assets/svg/html5.icon.svg";
import CSSIcon from "@/../../public/assets/svg/css.icon.svg";
import GitIcon from "@/../../public/assets/svg/git.icon.svg";
// import TailwindcssIcon from "@/../../public/assets/svg/icons8-tailwindcss-100.svg";

function Skills() {
  return (
    <section className="pt-11 md:pt-14 lg:pt-32 xl:pt-40 pb-16 md:pb-24 lg:pb-44 xl:pb-60">
      <h2 className="text-center  font-MAZIUS-Italic italic text-3xl xl:text-4xl mb-2 xl:mb-6">
        skills
      </h2>
      <p className="text-center font-Avenir-Regular mb-4 md:mb-8 lg:mb-7 xl:mb-11">
        Skills, tools and technologies that I own
      </p>
      <div className="flex justify-center items-center">
        <ul className=" flex flex-wrap gap-3 w-80 md:w-640px">
          <li>
            <Image src={NextJsIcon} alt="Next.js icon" title="Next.js icon" />
          </li>
          <li>
            <Image src={ReactIcon} alt="React icon" title="React icon" />
          </li>
          <li>
            <Image src={JsIcon} alt="Js icon" title="Js icon" />
          </li>
          <li>
            <Image src={FigmaIcon} alt="Figma icon" title="Figma icon" />
          </li>
          <li>
            <Image src={NodeJsIcon} alt="NodeJs icon" title="NodeJs icon" />
          </li>
          <li>
            <Image src={MangoDBIcon} alt="MangoDB icon" title="MangoDB icon" />
          </li>
          <li>
            <Image src={HTML5Icon} alt="HTML5 icon" title="HTML5 icon" />
          </li>
          <li>
            <Image src={CSSIcon} alt="CSS icon" title="CSS icon" />
          </li>
          <li>
            <Image src={GitIcon} alt="Git icon" title="Git icon" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
