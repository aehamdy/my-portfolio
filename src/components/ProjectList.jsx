/* eslint-disable react/prop-types */
import { projects } from "../data/projects";
import NoProjectsFound from "./NoProjectsFound";
import ProjectCard from "./ProjectCard";

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

  return (
    <div
      className={`relative grid grid-cols-1 ${
        filteredProjects.length > 0 && "sm:grid-cols-2"
      } gap-6 sm:gap-8 p-section-padding before:absolute before:hidden  ${
        filteredProjects.length > 1 && "before:sm:block"
      } before:w-[1px] before:h-full before:top-0 before:start-[50%] before:translate-x-[-50%] before:bg-custom-gradient-to-b`}
    >
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
