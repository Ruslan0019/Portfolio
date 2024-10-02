import Image from "next/image";
import React from "react";
import TikMaker from "@/../../public/assets/img/tikMaker.webp";

function projects() {
  return (
    <section className="pt-20">
      <h2 className="text-center font-MAZIUS-Italic italic text-3xl mb-3">project</h2>
      <p className="text-center mb-8">Some things I’ve worked (or am working) on</p>
      <ul>
        <li className="max-w-327px">
          <div className="flex h-28">
            <Image
              className=" object-cover"
              src={TikMaker}
              alt="TikMaker"
              title="TikMaker"
              width={327}
              height={114}
            />
          </div>
          <h2>WEB DEVELOPMENT</h2>
          <h2>Personal Website</h2>
          <p>
            Lorem ipsum dolor sit amet. Qui consequatur rerum eum assumenda accusamus et fuga
            numquam quo reprehenderit sequi et sint exercitationem eum sequi eligendi et similique
            ratione. Non quas itaque qui odio incidunt in ducimus consequatur. Eum ullam eius hic
            voluptates tenetur nam consectetur possimus. Et voluptatem consequatur.
          </p>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}

export default projects;
