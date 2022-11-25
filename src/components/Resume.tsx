import { Header } from "./Header";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";

export const Resume = () => {
  return (
    <section
      id="resume"
      style={{ maxWidth: "816px" }}
      className="flex flex-col bg-white md:rounded-md shadow-lg lg:my-20 lg:mx-10 md:my-10 md:mx-5 text-neutral-900"
    >
      <Header />
      <div className="flex w-full my-10">
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
