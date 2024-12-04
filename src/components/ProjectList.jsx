/* eslint-disable react/prop-types */
import personalInfo from "../data/personalInfo";
// import { projects } from "../data/projects";
import NoProjectsFound from "./NoProjectsFound";
import ProjectCard from "./ProjectCard";
import SeparatorToBottom from "./SeparatorToBottom";

function ProjectList({ selectedCategory }) {
  const projectsArray = [];

  const filteredProjects = personalInfo.projects.filter((project) => {
    if (selectedCategory.toLowerCase() === "all") {
      return project.addToPortfolioProjects;
    } else {
      project.category.includes(selectedCategory.toLowerCase()) &&
        projectsArray.push(project);

      return project.addToPortfolioProjects && project.category.includes(selectedCategory.toLowerCase());
    }
  });

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
