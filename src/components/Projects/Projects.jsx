import Image from "next/image";
import React from "react";
// import TikMaker from "@/../../public/assets/img/tikMaker.webp";
// import portfolio from "@/../../public/assets/img/portfolio.png";

import Link from "next/link";
import projects from "./projectList";

function Projects() {
  return (
    <section className="flex flex-col pt-11 justify-center  items-center   pb-11">
      <h2 className="text-center  italic text-3xl mb-3">project</h2>
      <p className="text-center text-[15px] mb-8 regular">
        Some things I’ve worked (or am working) on
      </p>
      <ul className="flex flex-col gap-10 ">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-lg  max-w-327px md:max-w-[696px] lg:max-w-[964px] flex gap-1 flex-col md:flex-row-reverse "
          >
            <Link
              className=" transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased"
              target="_blank"
              href={project.link}
            >
              <Image
                className="rounded-lg object-cover mb-2 h-28 md:h-[268px] md:w-[340px] lg:w-[589px]"
                src={project.image}
                alt={project.name}
                title={project.name}
                width={327}
                height={114}
              />
            </Link>
            <div className="md:w-[340px] lg:w-[345px]">
              <h2 className="text-[#859591] text-[17px]">{project.category}</h2>
              <h2 className="text-[24px]">{project.name}</h2>
              <p>{project.description}</p>
              <ul className="flex gap-1">
                {project.tech.map((tech, index) => (
                  <li key={index} title={tech.name}>
                    {tech.icon}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
