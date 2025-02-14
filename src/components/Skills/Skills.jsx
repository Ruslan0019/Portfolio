import React from "react";
import javaScript from "../../../public/assets/svg/javaScript.svg";
import html5 from "../../../public/assets/svg/html5.svg";
import react from "../../../public/assets/svg/react.svg";
import git from "../../../public/assets/svg/git.svg";
import nodeJS from "../../../public/assets/svg/nodeJS.svg";
import css3 from "../../../public/assets/svg/css3.svg";
import figma from "../../../public/assets/svg/figma.svg";
import mongoDB from "../../../public/assets/svg/mongoDB.svg";
import nextJS from "../../../public/assets/svg/nextJS.svg";
import tailwindCSS from "../../../public/assets/svg/tailwindCSS.svg";

import Image from "next/image";

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
            <Image
              src={nextJS}
              title="nextJS"
              alt="nextJS"
              width={85}
              className="h-auto"
            />
          </li>

          <li>
            <Image
              src={react}
              title="react"
              alt="react"
              width={85}
              className="h-auto"
            />
          </li>

          <li>
            <Image
              src={javascript}
              title="javascript"
              alt="javascript"
              width={85}
              className="h-auto"
            />
          </li>

          <li>
            <Image
              src={html5}
              title="html5"
              alt="html5"
              width={85}
              className="h-auto"
            />
          </li>

          <li>
            <Image
              src={css3}
              title="css3"
              alt="css3"
              width={85}
              className="h-auto"
            />
          </li>

          <li>
            <Image
              src={git}
              title="git"
              alt="git"
              width={85}
              className="h-auto"
            />
          </li>
          <li>
            <Image
              src={tailwindCSS}
              title="tailwindCSS"
              alt="tailwindCSS"
              width={85}
              className="h-auto"
            />
          </li>

          <li>
            <Image
              src={nodeJS}
              title="nodeJS"
              alt="nodeJS"
              width={85}
              className="h-auto"
            />
          </li>
          <li>
            <Image
              src={figma}
              title="figma"
              alt="figma"
              width={85}
              className="h-auto"
            />
          </li>
          <li>
            <Image
              src={mongoDB}
              title="mongoDB"
              alt="mongoDB"
              width={85}
              className="h-auto"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
