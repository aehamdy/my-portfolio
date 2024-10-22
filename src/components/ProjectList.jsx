/* eslint-disable react/prop-types */
import { projects } from "../data/projects";

function ProjectList({ selectedCategory }) {
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory.toLowerCase() === "all") {
      return true;
    } else {
      return project.category.includes(selectedCategory.toLowerCase());
    }
  });

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 p-section-padding before:absolute before:hidden before:sm:block before:w-[1px] before:h-full before:top-0 before:start-[50%] before:translate-x-[-50%] before:bg-custom-gradient-to-b">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, i) => (
          <article key={i} className="group w-full">
            <a
              href={project.link}
              target="_blank"
              className="flex flex-col gap-2"
            >
              <div className="w-full rounded-[25px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.altText}
                  style={{ width: "100%" }}
                  className="group-hover:scale-110 duration-short"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-base text-dark-gray dark:text-white-90 group-hover:text-accent duration-short">
                  {project.name}
                </h4>

                <span className="text-sm text-light-gray">
                  {project.description.charAt(0).toUpperCase() +
                    project.description.slice(1).toLowerCase()}
                </span>
              </div>
            </a>
          </article>
        ))
      ) : (
        <p className="text-light-gray">
          {`No projects added for '${
            selectedCategory.charAt().toUpperCase() +
            selectedCategory.slice(1).toLowerCase()
          }' category yet`}
        </p>
      )}
    </div>
  );
}

export default ProjectList;
