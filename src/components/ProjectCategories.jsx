/* eslint-disable react/prop-types */
import { projectCategories } from "../data/projects";
import ProjectCategoriesButton from "./ProjectCategoriesButton";

function ProjectCategories({ setSelectedCategory }) {
  return (
    <div className="flex gap-2 ms-2 pt-[12.5px] px-section-padding">
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
