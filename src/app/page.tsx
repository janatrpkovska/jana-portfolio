import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowIWork } from "@/components/HowIWork";
import { Projects } from "@/components/Projects";
import { TeamProjects } from "@/components/TeamProjects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <HowIWork />
        <Projects />
        <TeamProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
