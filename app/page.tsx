import { Banner } from "~/components/banner";
import { Experience } from "~/components/experience";
import { Footer } from "~/components/footer";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills";

export default function Home() {
  return (
    <section
      id="about"
     className="relative flex flex-col min-h-screen overflow-hidden py-10 bg-gray-800 text-white"
    >
      <div className="relative flex justify-center">
        <div className="relative inline-block">
          <img
            src="/1563744367196.jpeg"
            alt="Alexandros Aidonis"
            className="mx-auto w-40 h-40 rounded-full border-4 border-gray-300 
                      transition-transform duration-300 ease-in-out 
                      hover:scale-110 hover:shadow-xl hover:shadow-blue-500/70 
                      hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50 
                      hover:rotate-6"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent animate-laser-effect" />
        </div>
      </div>
      <Banner />
      <div className="mt-12 px-10 flex-grow">
        <Experience />
        <Projects />
      </div>
      <Skills />
      <div className="mt-auto" >
        <Footer />
      </div>
    </section>
  );
}



