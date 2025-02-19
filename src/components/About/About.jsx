import React from "react";

function About() {
  return (
    <section className="flex pt-11 justify-center  items-center   pb-11">
      <div className="flex  flex-col   md:flex-row md:w-689px xl:w-720px gap-2 md:gap-5 lg:gap-6 xl:gap-11 ">
        <div>
          <h2 className="text-center  font-MAZIUS-Italic italic text-[28px] md:text-[32px] xl:text-4xl ">
            about me
          </h2>
        </div>
        <div className="max-w-327px md:max-w-520px lg:max-w-488px xl:max-w-540px ">
          <p className=" text-center md:text-start font-Avenir-Regular text-base xl:text-xl ">
            Hello! My name is Ruslan, and I enjoy creating things on the web.
            <br />
            <br /> I am a Full-stack developer with experience in Next.js,
            React, JavaScript, HTML, NodeJS, CSS, and Tailwind CSS. I have
            independently developed and maintain TikMaker.app, built my
            portfolio website, and contributed to team projects during my
            studies. I focus on writing clean, maintainable code, optimizing
            performance and SEO, and following modern development best
            practices. I thrive on solving challenging problems and continuously
            expanding my skill set. I take ownership of my work and collaborate
            effectively to achieve project goals. Looking forward to new
            opportunities and exciting projects!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
