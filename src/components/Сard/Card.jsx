import Link from "next/link";
import React from "react";
import github from "../../../public/assets/svg/github.svg";
import telegram from "../../../public/assets/svg/telegram.svg";
import linkedin from "../../../public/assets/svg/linkedin.svg";
import Image from "next/image";

function Card() {
  return (
    <section className="flex pt-6 justify-center  items-center pb-11">
      <div className=" relative  drop-shadow-[0_25px_25px_rgb(0,0,0,0.2)]   w-80  md:w-689px  lg:w-960px xl:w-1110px h-60 md:h-292px lg:h-302px xl:h-372px   rounded-3xl  ">
        <div className="max-w-full flex items-center justify-center absolute inset-0 bg-[#F5F5F0] rounded-3xl  w-80  md:w-689px  lg:w-960px xl:w-1110px h-60 md:h-292px lg:h-302px xl:h-372px ">
          <div className=" w-292px md:w-550px lg:w-804px xl:w-920px ">
            <h2 className=" ml-5 md:ml-[0px] text-darkGray font-MAZIUS-Italic italic text-[28px] md:text-[32px] xl:text-[36px]  ">
              hello!
            </h2>
            <p className="text-darkGray font-Avenir-Regular  ml-5 md:ml-[0px] mr-5 md:mr-[0px] mt-3  text-base xl:text-xl leading-[130%]">
              I&apos;m Ruslan, and I am Full-stack developer
            </p>
            <div className="flex mt-5 ml-5 md:ml-[0px] md:mt-8 xl:mt-11 justify-between mr-[20px] md:mr-[0px] items-center ">
              <div className=" w-20 md:w-auto">
                <ul className="flex flex-wrap md:flex-nowrap gap-3 md:gap-6 ">
                  <li className="text-darkGray transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
                    <Link
                      href={`https://t.me/const_YourName`}
                      title="Telegram"
                      alt="Telegram"
                      target="_blank"
                    >
                      <Image
                        src={telegram}
                        title="telegram"
                        alt="telegram"
                        width={26}
                        className="h-auto md:size-[32px]  "
                        priority
                      />
                    </Link>
                  </li>
                  <li className="text-black transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
                    <Link
                      href={`https://github.com/Ruslan0019`}
                      title="GitHub"
                      alt="GitHub"
                      target="_blank"
                    >
                      <Image
                        src={github}
                        title="github"
                        alt="github"
                        width={26}
                        className="h-auto md:size-[32px]"
                        priority
                      />
                    </Link>
                  </li>
                  <li className="text-black transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased ">
                    <Link
                      href={`https://www.linkedin.com/in/ruslan-afanasiev-6ab32a279/`}
                      title="LinkedIn"
                      alt="LinkedIn"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        title="linkedin"
                        alt="linkedin"
                        width={26}
                        className="h-auto md:size-[32px] "
                        priority
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 md:gap-5 md:flex-row   ">
                <button className="w-[165px] md:w-[168px] lg:w-[190px] xl:h-[33px]  h-[29px] shadow-md shadow-gray-500  text-darkGray  border-border border-x border-y rounded-3xl  text-xs md:text-sm transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased">
                  VIEV PROJECTS
                </button>
                <button className="w-[165px] md:w-[168px] lg:w-[190px] xl:h-[33px] h-[29px] shadow-md shadow-gray-500  bg-[#363636] rounded-3xl  text-xs md:text-sm transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased">
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
