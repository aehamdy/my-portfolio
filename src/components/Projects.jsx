import ProjectCategories from "./ProjectCategories";
import ProjectList from "./ProjectList";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section
      id="projects"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <SectionTitle title="projects" />
      <ProjectCategories />
      <ProjectList />
    </section>
  );
}

export default Projects;
