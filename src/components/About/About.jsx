import React from "react";

function About() {
  return (
    <section className="flex pt-11 justify-center  items-center   pb-11">
      <div className="flex  flex-col   md:flex-row md:w-689px xl:w-720px gap-2 md:gap-5 lg:gap-6 xl:gap-11 ">
        <div>
          <h2 className="text-center  font-MAZIUS-Italic italic text-3xl xl:text-4xl ">
            about me
          </h2>
        </div>
        <div className="max-w-327px md:max-w-520px lg:max-w-488px xl:max-w-540px ">
          <p className="text-center md:text-start font-Avenir-Regular text-base xl:text-xl ">
            Hello! My name is Ruslan and I enjoy creating things.
            <br />
            <br /> Full-stack Developer with experience in React, HTML, CSS, and
            JavaScript. Completed several pet projects and contributed to a
            commercial startup project. Focused on writing clean code, learning
            modern technologies, and tackling challenging tasks. Eager to learn
            quickly and work effectively in a team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
