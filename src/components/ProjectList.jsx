import { projects } from "../data/projects";

function ProjectList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-section-padding">
      {projects.map((project, i) => (
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
                {project.category.charAt(0).toUpperCase() +
                  project.category.slice(1).toLowerCase()}
              </span>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}

export default ProjectList;
