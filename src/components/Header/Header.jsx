"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="pt-2 pb-3 border-b border-border md:pt-3 md:pb-6">
        <nav className="flex justify-between items-center">
          <Link href={`/`} title="Home" alt="Home">
            <h1 className=" text-[#F5F5F0] text-3xl md:text-45px font-bold font-MAZIUS-Italic italic transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased">
              Afanasiev Ruslan
            </h1>
          </Link>
          <div className="cursor-pointer ml-auto" onClick={toggleMenu}></div>
        </nav>
      </header>

      <div
        className={`fixed top-[-130px] right-[-170px] w-[400px] h-[310px] bg-border rounded-full transform ${
          isOpen ? "scale-100" : "scale-0"
        } transition-transform duration-300`}
      >
        <nav className=" pt-36 pl-14 text-white">
          <ul className="">
            <li className="pl-28">
              <div
                className="flex text-white cursor-pointer"
                onClick={toggleMenu}
              >
                <span className="text-2xl">✕</span>
              </div>
            </li>

            <li className="transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased">
              <button>PROJECTS</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
