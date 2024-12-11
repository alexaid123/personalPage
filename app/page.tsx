import { Banner } from "~/components/banner";
import { Experience } from "~/components/experience";
import { Footer } from "~/components/footer";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills";

export default function Home() {
  return (
    <section id="about" className="relative overflow-hidden py-32 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
      <Banner />
      <Skills /> 
      <div className="mt-12">
        <Experience />
        <Projects />
      </div>
      <Footer />
    </section>
  );
}
