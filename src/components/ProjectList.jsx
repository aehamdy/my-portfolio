/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { projects } from "../data/projects";
import NoProjectsFound from "./NoProjectsFound";
import ProjectCard from "./ProjectCard";
import SeparatorToBottom from "./SeparatorToBottom";

function ProjectList({ selectedCategory }) {
  const projectsArray = [];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory.toLowerCase() === "all") {
      return true;
    } else {
      project.category.includes(selectedCategory.toLowerCase()) &&
        projectsArray.push(project);

      return project.category.includes(selectedCategory.toLowerCase());
    }
  });

  // useEffect(() => {
  //   console.log(filteredProjects);
  // }, [selectedCategory]);

  return (
    <div
      className={`relative grid grid-cols-1 ${
        filteredProjects.length >= 1 && "sm:grid-cols-2"
      } gap-6 sm:gap-8 p-section-padding before:absolute before:hidden`}
    >
      {filteredProjects.length > 1 && (
        <div className="hidden sm:block absolute start-[50%] top-0 w-[1px] h-full">
          <SeparatorToBottom />
        </div>
      )}
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))
      ) : (
        <NoProjectsFound selectedCategory={selectedCategory} />
      )}
    </div>
  );
}

export default ProjectList;
