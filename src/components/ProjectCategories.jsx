import { projectCategories } from "../data/projects";

function ProjectCategories() {
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      {projectCategories.map((item, i) => (
        <button type="button" key={i} value={item} onClick={handleClick}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default ProjectCategories;
