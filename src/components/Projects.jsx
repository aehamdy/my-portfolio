import ProjectCategories from "./ProjectCategories";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section
      id="projects"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <SectionTitle title="projects" />
      <ProjectCategories />
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}

export default Projects;