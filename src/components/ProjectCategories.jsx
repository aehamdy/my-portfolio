/* eslint-disable react/prop-types */
import { categories } from "../data/categories";
import ProjectCategoriesButton from "./ProjectCategoriesButton";

function ProjectCategories({ setSelectedCategory, selectedCategory }) {
  const categoriesArray = Object.values(categories);
  return (
    <div className="flex items-center gap-4 ms-2 px-3 md:px-section-padding">
      {categoriesArray.map((item, i) => (
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
