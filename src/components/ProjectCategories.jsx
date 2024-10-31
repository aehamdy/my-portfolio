/* eslint-disable react/prop-types */
import { projectCategories } from "../data/projects";
import ProjectCategoriesButton from "./ProjectCategoriesButton";

function ProjectCategories({ setSelectedCategory, selectedCategory }) {
  return (
    <div className="flex items-center gap-4 ms-2 px-3 md:px-section-padding">
      {projectCategories.map((item, i) => (
        <ProjectCategoriesButton
          key={i}
          item={item}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
}

export default ProjectCategories;
