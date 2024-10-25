/* eslint-disable react/prop-types */
import { projectCategories } from "../data/projects";

function ProjectCategories({ setSelectedCategory }) {
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex gap-2 ms-2 pt-[12.5px] px-section-padding">
      {projectCategories.map((item, i) => (
        <div key={i}>
          <input
            type="radio"
            name="project-category"
            id={item}
            value={item}
            onChange={handleChange}
            defaultChecked={item === "all"}
            className="hidden peer"
          />
          <label
            htmlFor={item}
            className="font-normal text-sm text-dark-gray dark:text-white-85 hover:text-accent peer-checked:text-accent cursor-pointer duration-300"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ProjectCategories;
