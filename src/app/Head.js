import React from "react";

export default function Head() {
  return (
    <>
      <title>Portfolio</title>
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Portfolio" />
      <meta property="og:title" content="My Portfolio - Frontend Developer" />
      <meta
        property="og:description"
        content="Welcome to my personal portfolio website. Discover my projects, skills, and experience as a Full Stack Developer."
      />
      <meta
        property="og:url"
        content="https://portfolio-flax-seven-83.vercel.app/"
      />
      <meta
        property="og:image"
        content="https://portfolio-flax-seven-83.vercel.app/apple-touch-icon.png"
      />
      <meta
        name="description"
        content="Explore my portfolio showcasing my work as a Full Stack Developer. Learn more about my skills, experience, and projects."
      />

      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/apple-touch-icon.png"
      />

      <link rel="icon" type="image/png" href="/favIcon/favicon16x16.png" />
      <link rel="icon" type="image/png" href="/favIcon/favicon32x32.png" />

      <link
        rel="canonical"
        href="https://portfolio-flax-seven-83.vercel.app/"
      />
    </>
  );
}
