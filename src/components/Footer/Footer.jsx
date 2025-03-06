import Link from "next/link";
import React from "react";
import githubWhite from "../../../public/assets/svg/githubWhite.svg";
import telegramWhite from "../../../public/assets/svg/telegramWhite.svg";
import linkedinWhite from "../../../public/assets/svg/linkedinWhite.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="pt-8 pb-6 border-t border-border">
      <p className="flex mb-4 items-center justify-center text-text">
        Contact me
      </p>
      <nav className="flex flex-col  gap-6 items-center justify-center">
        <ul className="flex gap-6 items-center justify-center">
          <li className=" transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
            <Link
              href={`https://t.me/const_YourName`}
              title="Telegram"
              target="_blank"
            >
              <Image
                src={telegramWhite}
                title="telegram"
                alt="telegram"
                width={32}
                className="h-auto"
              />
            </Link>
          </li>
          <li className=" transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
            <Link
              href={`https://github.com/Ruslan0019`}
              title="GitHub"
              alt="GitHub"
              target="_blank"
            >
              <Image
                src={githubWhite}
                title="github"
                alt="github"
                width={32}
                className="h-auto"
              />
            </Link>
          </li>
          <li className=" transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
            <Link
              href={`https://www.linkedin.com/in/ruslan-afanasiev-6ab32a279/`}
              title="LinkedIn"
              alt="LinkedIn"
              target="_blank"
            >
              <Image
                src={linkedinWhite}
                title="linkedin"
                alt="linkedin"
                width={32}
                className="h-auto"
              />
            </Link>
          </li>
        </ul>
        <div>
          <p className="text-text">
            © 2024 Afanasiev Ruslan All Rights Reserved
          </p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
