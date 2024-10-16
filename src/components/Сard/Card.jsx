import Link from "next/link";
import React from "react";
import telegram from "/public/assets/svg/telegram.black.icon.svg";
import github from "/public/assets/svg/github.icon.svg";
import linkedIn from "/public/assets/svg/linkedIn.icon.svg";
import Image from "next/image";

function Card() {
  return (
    <section className="flex pt-6 justify-center  items-center    pb-11">
      <div className=" flex items-center justify-center  w-80  md:w-689px  lg:w-960px xl:w-1110px h-60 md:h-292px lg:h-302px xl:h-372px bg-white rounded-3xl  ">
        <div className="w-292px md:w-550px lg:w-804px xl:w-920px">
          <h2 className=" ml-5 text-darkBackground font-MAZIUS-Italic italic text-2xl md:text-3xl xl:text-4xl  ">
            hello!
          </h2>
          <p className="text-black font-Avenir-Regular  ml-5 mt-3 w-292px md:w-372px text-base xl:text-xl leading-[130%]">
            I&apos;m Amanda, and I currently attend UBC for engineering. Welcome to my first web dev
            project 😎
          </p>
          <div className="flex mt-5 md:mt-8 xl:mt-11 justify-between items-center ">
            <div className="ml-5 w-20 md:w-auto">
              <ul className="flex flex-wrap md:flex-nowrap gap-3 md:gap-6 ">
                <li className="text-black transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
                  <Link href={`https://t.me/Ruslan_0019`} title="Telegram" alt="Telegram">
                    <Image
                      className=" md:w-9"
                      src={telegram}
                      width={32}
                      title="Telegram"
                      alt="Telegram"
                    />
                  </Link>
                </li>
                <li className="text-black transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
                  <Link href={`https://github.com/Ruslan0019`} title="GitHub" alt="GitHub">
                    <Image
                      className=" md:w-9"
                      src={github}
                      width={32}
                      title="Github"
                      alt="Github"
                    />
                  </Link>
                </li>
                <li className="text-black transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
                  <Link
                    href={`https://www.linkedin.com/in/ruslan-afanasiev-6ab32a279/`}
                    title="LinkedIn"
                    alt="LinkedIn"
                  >
                    <Image
                      className=" md:w-9"
                      src={linkedIn}
                      width={32}
                      title="LinkedIn"
                      alt="LinkedIn"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 md:flex-row  ">
              <Link
                href={"/projects"}
                className="text-border pt-2 pb-2 pr-8 pl-8 border-border border-x border-y rounded-3xl  text-xs md:text-sm transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased"
              >
                VIEV PROJECTS
              </Link>
              <Link
                href={"/contact"}
                className="bg-border rounded-3xl pt-2 pb-2 pr-8 pl-8 text-xs md:text-sm transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
