import Image from "next/image";
import React from "react";
import Link from "next/link";
import projects from "./projectList";

function Projects() {
  return (
    <section className="flex flex-col pt-11 justify-center items-center pb-11">
      <h2 className="text-center italic text-[28px] md:text-[32px] xl:text-[36px] mb-3">
        project
      </h2>
      <p className="text-center text-[16px] xl:text-[20px] mb-8 regular">
        Some things I’ve worked (or am working) on
      </p>
      <ul className="flex flex-col gap-[42px] md:gap-[62px] lg:gap-[52px] xl:gap-[100px]">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`rounded-lg max-w-327px md:max-w-[696px] lg:max-w-[964px] flex gap-2 md:gap-4 lg:gap-6 xl:gap-8
               flex-col 
              ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <Link
              className="  drop-shadow-[0_25px_25px_rgb(0,0,0,0.2)] transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased"
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
                quality={100}
              />
            </Link>
            <div className="md:w-[340px] lg:w-[345px]">
              <h2 className="text-[rgb(133,149,145)] text-[16px] md:text-[20px]">
                {project.category}
              </h2>
              <h2 className="text-[24px] md:text-[32px] xl:text-[36px]">
                {project.name}
              </h2>
              <p className="text-base xl:text-[20px] mb-3 md:mb-5">
                {project.description}
              </p>
              <div className="flex flex-col gap-2 ">
                <ul className="flex gap-1 content-center ">
                  {project.tech.map((tech, i) => (
                    <li key={i} title={tech.name}>
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        title={tech.name}
                        width={25}
                        className="h-auto"
                      />
                    </li>
                  ))}
                </ul>

                {index > 0 && (
                  <Link
                    className="  shadow-md shadow-gray-900 transform transition-transform duration-300 hover:scale-105 will-change-transform antialiased  text-[16px] w-[123px] md:w-[184px] bg-[#2F3634] hover:bg-[#859591]  py-[10px]  rounded-[74px] cursor-pointer text-center"
                    href={project.linkCode}
                    target="_blank"
                  >
                    VIEW CODE
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
