import { Header } from "./Header";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";

export const Resume = () => {
  return (
    <section
      id="resume"
      className="flex flex-col bg-white rounded-md shadow-lg my-20 mx-10 text-neutral-900 lg:h-pdf lg:w-pdf"
    >
      <Header />
      <div className="flex w-full h-full py-6">
        <Skills />
        <div className="flex flex-col w-full px-10">
          <Education />
          <Experience />
        </div>
      </div>
      <Footer />
    </section>
  );
};
