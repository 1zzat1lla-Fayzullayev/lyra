import { FuzzyOverlay } from "../components/Header";
import { projects } from "../data/projectsCard";
import Wrapper from "../layout/Wrapper";

function ProjectsPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="bg-neutral-950 text-neutral-50 h-screen flex flex-col justify-center items-center p-6 text-center">
          <h1 className="text-center text-3xl md:text-6xl font-black text-neutral-50">
          Siz uchun yaratilgan loyihalarimiz bilan tanishing!

          </h1>
          <FuzzyOverlay />
        </div>
      </div>
      <div className="my-[50px]">
        <Wrapper>
          <div className="flex justify-center flex-wrap gap-[20px]">
            <ProjectsCard />
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default ProjectsPage;

export const ProjectsCard = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          className="relative max-w-[350px] group cursor-pointer"
          key={project.title}
        >
          <a href={project.link} target="_blank">
            <img
              src={project.img}
              className="w-full transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
            />

            <div
              className="absolute inset-0 flex justify-center items-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md p-4"
              style={{ backdropFilter: "blur(3px)" }}
            >
              <p className="text-white text-3xl font-bold">{project.title}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};
