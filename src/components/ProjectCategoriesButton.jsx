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
        className={`font-normal text-xs md:text-sm text-dark-gray dark:text-white-85 hover:text-accent peer-checked:text-accent cursor-pointer select-none duration-300`}
      >
        {item.toLowerCase() === "api"
          ? item.toUpperCase()
          : item
              .split(" ")
              .map((word, i) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
      </label>
    </div>
  );
}

export default ProjectCategoriesButton;
