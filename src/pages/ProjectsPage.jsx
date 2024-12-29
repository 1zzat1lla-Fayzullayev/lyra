/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
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
          <div>
            <ProjectsCard />
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default ProjectsPage;

export const ProjectsCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const lastIndex = currentPage * projectsPerPage;
  const firstIndex = lastIndex - projectsPerPage;
  const currentData = projects.slice(firstIndex, lastIndex);

  // console.log(
  //   "Bu oxrgi index va turgan sahifa * ekranga chiqishi kerak bo'lgan elementlar sonini ko'paytirganda xosil bo'ldi: ",
  //   lastIndex
  // );
  // console.log("Bu chiqgan natijadan ekrandagi elementlar sonini ayriganda hosil bo'ldi: ", firstIndex);
  // console.log(currentData);

  const totalProjects = Math.ceil(projects.length / projectsPerPage);

  // console.log("Bu umumiy projects arrayni ekrandagi elementlar soniga bo'lishdan hosil bo'ldi: ", totalProjects);
  const numArr = [];
  for (let i = 1; i <= totalProjects; i++) {
    numArr.push(i);
  }

  return (
    <>
      <div className="flex justify-center flex-wrap gap-[20px]">
        {currentData.map((project) => (
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
      </div>

      <div className="flex gap-2 justify-center mt-10">
        {numArr.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`w-[40px] h-[40px] rounded-[10px]  font-[700] text-[18px] ${
              currentPage === item
                ? "bg-slate-200 text-black"
                : "text-white bg-neutral-950"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
