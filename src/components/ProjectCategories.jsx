import { projectCategories } from "../data/projects";

function ProjectCategories() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="flex">
      {projectCategories.map((item, i) => (
        <div key={i}>
          <input
            type="radio"
            name="project-category"
            id={item}
            value={item}
            onClick={handleChange}
          />
          <label htmlFor={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ProjectCategories;
