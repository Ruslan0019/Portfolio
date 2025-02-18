import React from "react";

function Interests() {
  const interests = [
    "Programming",
    "Web Development",
    "Training gym 💕",
    "Productivity Psychology",
    "Travel & Cultural Exploration",
    "Video Games",
  ];
  return (
    <section className="flex flex-col pt-11 justify-center  items-center   pb-11">
      <h2 className="mb-2 font-MAZIUS-Italic  italic text-3xl text-[26px] md:text-[32px] xl:text-[36px] ">
        interests
      </h2>
      <p className="mb-7 text-base text-[16px] xl:text-[20px]">
        Some things I enjoy learning about and doing
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-[14px] xl:gap-4 ">
        {interests.map((interest, index) => (
          <li
            className="drop-shadow-xl text-center pl-5 pr-5 w-max-[159px] md:w-[226px] lg:w-[312px] xl:w-[359px] h-[77px] md:h-[120px] lg:h-[166px]  xl:h-[202px] flex items-center justify-center rounded-[10px] md:rounded-[25px] bg-[#272D2B]  text-[14px] md:text-[16px] lg:text-[20px]"
            key={index}
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Interests;
