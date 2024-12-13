import { Banner } from "~/components/banner";
import { Experience } from "~/components/experience";
import { Footer } from "~/components/footer";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills";

export default function Home() {
  return (
    <section id="about" className="relative overflow-hidden py-32 bg-gradient-to-r from-green-800 via-green-600 to-green-500">
      <Banner />
      <div className="mt-12 px-10">
        <Experience />
        <Projects />
      </div>
      <Skills /> 
      <Footer />
    </section>
  );
}
