import About from "@/components/About/About";
import Interests from "@/components/Interests/interests";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Card from "@/components/Сard/Card";
import Head from "./Head";

export default function Home() {
  return (
    <>
      <Head />
      <Card />
      <About />
      <Interests />
      <Projects />
      <Skills />
    </>
  );
}
