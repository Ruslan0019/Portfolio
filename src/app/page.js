import About from "@/components/About/About";
import Interests from "@/components/Interests/interests";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Card from "@/components/Сard/Card";

export default function Home() {
  return (
    <>
      <Card />
      <About />
      <Interests />
      <Projects />
      <Skills />
    </>
  );
}
