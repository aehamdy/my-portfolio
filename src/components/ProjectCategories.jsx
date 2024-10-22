import { projectCategories } from "../data/projects";

function ProjectCategories() {
  const handleChange = (e) => {
    // console.log(e.target.value);
  };
  return (
    <div className="flex gap-2">
      {projectCategories.map((item, i) => (
        <div key={i}>
          <input
            type="radio"
            name="project-category"
            id={item}
            value={item}
            onClick={handleChange}
            className="hidden peer"
          />
          <label
            htmlFor={item}
            className="font-normal text-sm text-dark-gray dark:text-white-85 peer-checked:text-accent duration-short"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ProjectCategories;
