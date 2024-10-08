import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="pt-8 pb-6 border-t border-border">
      <p className="flex mb-4 items-center justify-center">Contact me</p>
      <nav className="flex flex-col  gap-6 items-center justify-center">
        <ul className="flex gap-6 items-center justify-center">
          <li className="w-9 transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased">
            <Link href={`https://t.me/Ruslan_0019`} title="Telegram">
              <Image
                src="/assets/svg/telegram.svg"
                width={32}
                height={32}
                alt="Telegram"
                title="Telegram"
              />
            </Link>
          </li>
          <li className="w-9 transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased">
            <Link href={`https://github.com/Ruslan0019`} title="GitHub" alt="GitHub">
              <svg width="35" height="31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.396.123a16.789 16.789 0 0 0-10.71 3.833c-2.989 2.476-4.975 5.906-5.604 9.678a15.735 15.735 0 0 0 2.175 10.907c2.032 3.268 5.193 5.726 8.916 6.932.82.15 1.127-.349 1.127-.775 0-.384-.014-1.649-.022-2.994-4.596.972-5.564-1.897-5.564-1.897-.752-1.864-1.836-2.354-1.836-2.354-1.499-1 .112-.978.112-.978 1.661.114 2.534 1.657 2.534 1.657 1.474 2.458 3.865 1.75 4.806 1.332.15-1.04.578-1.748 1.05-2.15-3.657-.402-7.528-1.782-7.528-7.946a6.13 6.13 0 0 1 1.705-4.323c-.173-.405-.74-2.04.158-4.262 0 0 1.387-.432 4.544 1.648a16.1 16.1 0 0 1 8.276 0c3.14-2.07 4.538-1.648 4.538-1.648.898 2.216.334 3.851.162 4.262a6.126 6.126 0 0 1 1.698 4.318c0 6.18-3.862 7.538-7.542 7.938.591.498 1.119 1.478 1.119 2.978 0 2.152-.016 3.886-.016 4.414 0 .429.295.93 1.132.772 3.718-1.21 6.872-3.67 8.9-6.937a15.734 15.734 0 0 0 2.166-10.899c-.63-3.767-2.614-7.195-5.599-9.67A16.788 16.788 0 0 0 17.396.124Z"
                  fill="#fff"
                />
                <path
                  d="M7.131 23.218c-.035.08-.164.104-.273.05-.11-.053-.189-.162-.15-.242.038-.08.166-.104.273-.05.107.053.189.162.148.242h.002ZM7.802 23.945c-.08.072-.233.038-.34-.074a.24.24 0 0 1-.047-.333c.083-.072.23-.037.34.075.11.111.129.266.047.332ZM8.452 24.872c-.1.07-.273 0-.369-.138-.096-.139-.101-.315 0-.384s.274 0 .37.136c.095.136.1.317 0 .386ZM9.355 25.767a.313.313 0 0 1-.347.01.306.306 0 0 1-.088-.082c-.145-.13-.186-.314-.093-.41.093-.096.274-.072.427.062.153.133.186.314.09.41l.011.01ZM10.575 26.287c-.04.125-.224.184-.413.13-.188-.053-.309-.202-.273-.33.035-.128.224-.186.413-.13.189.055.309.202.273.33ZM11.927 26.383c0 .133-.153.242-.35.245-.197.003-.356-.101-.359-.232-.002-.13.153-.245.353-.248.2-.002.356.104.356.235ZM13.185 26.175c.025.13-.112.266-.306.298-.194.032-.37-.045-.394-.175-.025-.131.115-.267.306-.299.192-.032.37.045.394.176Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>
          <li className="w-9 transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased">
            <Link
              href={`https://www.linkedin.com/in/ruslan-afanasiev-6ab32a279/`}
              title="LinkedIn"
              alt="LinkedIn"
            >
              <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.907 26.374h-4.593v-6.962c0-1.66-.03-3.796-2.39-3.796-2.392 0-2.758 1.808-2.758 3.675v7.082h-4.593V12.058h4.41v1.956h.061c.898-1.485 2.574-2.376 4.351-2.312 4.656 0 5.514 2.963 5.514 6.819l-.002 7.853ZM7.39 10.1c-1.463 0-2.666-1.164-2.666-2.58 0-1.415 1.203-2.58 2.666-2.58 1.462 0 2.665 1.165 2.665 2.58s-1.203 2.58-2.665 2.58Zm2.297 16.273H5.089V12.058h4.598v14.316ZM29.197.814H2.781C1.54.8.508 1.776.493 2.976v25.67c.015 1.202 1.047 2.178 2.288 2.166h26.416c1.244.015 2.28-.962 2.296-2.165V2.974C31.477 1.772 30.44.796 29.197.812v.002Z"
                  fill="#fff"
                />
              </svg>
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
