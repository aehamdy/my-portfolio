/* eslint-disable react/prop-types */

function ProjectCard({ project }) {
  return (
    <article className="group w-full">
      <a href={project.link} target="_blank" className="flex flex-col gap-2">
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
  );
}

export default ProjectCard;
