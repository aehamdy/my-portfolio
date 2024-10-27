import { useState } from "react";
import ProjectCategories from "./ProjectCategories";
import ProjectList from "./ProjectList";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section
      id="projects"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section duration-short"
    >
      <div className="flex justify-between items-center">
        <SectionTitle title="projects" />
        <div className="hidden sm:block">
          <ProjectCategories setSelectedCategory={setSelectedCategory} />
        </div>
      </div>
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="pt-4 sm:hidden">
        <ProjectCategories setSelectedCategory={setSelectedCategory} />
      </div>
      <ProjectList selectedCategory={selectedCategory} />
    </section>
  );
}

export default ProjectsSection;
