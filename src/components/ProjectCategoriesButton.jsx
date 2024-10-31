/* eslint-disable react/prop-types */
function ProjectCategoriesButton({
  item,
  setSelectedCategory,
  selectedCategory,
}) {
  const handleChange = (e) => {
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
        className={`font-normal text-xs md:text-sm cursor-pointer select-none duration-300
          ${
            item === selectedCategory
              ? "text-accent"
              : "text-dark-gray dark:text-white-85"
          } 
          hover:text-accent`}
      >
        {item.toLowerCase() === "api"
          ? item.toUpperCase()
          : item
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
      </label>
    </div>
  );
}

export default ProjectCategoriesButton;
