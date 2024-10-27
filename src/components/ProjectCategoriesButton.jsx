/* eslint-disable react/prop-types */

function ProjectCategoriesButton({ item, setSelectedCategory }) {
  const handleChange = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
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
        className={`font-normal text-sm text-dark-gray dark:text-white-85 hover:text-accent peer-checked:text-accent cursor-pointer select-none duration-300`}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </label>
    </div>
  );
}

export default ProjectCategoriesButton;
