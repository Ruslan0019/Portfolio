import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkedIn from "/public/assets/svg/icons8.svg";
import telegram from "/public/assets/svg/icons10.svg";
import github from "/public/assets/svg/icons9.svg";

function Footer() {
  return (
    <footer className="pt-8 pb-6 border-t border-border">
      <p className="flex mb-4 items-center justify-center">Contact me</p>
      <nav className="flex flex-col  gap-6 items-center justify-center">
        <ul className="flex gap-6 items-center justify-center">
          <li className=" transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
            <Link href={`https://t.me/Ruslan_0019`} title="Telegram">
              <Image className="md:w-9" src={telegram} width={32} alt="Telegram" title="Telegram" />
            </Link>
          </li>
          <li className=" transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
            <Link href={`https://github.com/Ruslan0019`} title="GitHub" alt="GitHub">
              <Image className="md:w-9" src={github} width={32} title="Github" alt="Github" />
            </Link>
          </li>
          <li className=" transform transition-transform duration-300 hover:scale-110 will-change-transform antialiased">
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
        <div>
          <p>© 2024 Afanasiev Ruslan All Rights Reserved</p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
