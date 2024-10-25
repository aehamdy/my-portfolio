import { useState } from "react";
import ProjectCategories from "./ProjectCategories";
import ProjectList from "./ProjectList";
import SectionTitle from "./SectionTitle";

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section
      id="projects"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <SectionTitle title="projects" />
      <ProjectCategories setSelectedCategory={setSelectedCategory} />
      <ProjectList selectedCategory={selectedCategory} />
    </section>
  );
}

export default ProjectsSection;
