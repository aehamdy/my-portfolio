/* eslint-disable react/prop-types */
import { projectCategories } from "../data/projects";
import ProjectCategoriesButton from "./ProjectCategoriesButton";

function ProjectCategories({ setSelectedCategory }) {
  return (
    <div className="flex items-center gap-2 ms-2 px-section-padding">
      {projectCategories.map((item, i) => (
        <ProjectCategoriesButton
          key={i}
          item={item}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
}

export default ProjectCategories;
