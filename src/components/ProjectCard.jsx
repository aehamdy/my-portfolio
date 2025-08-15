/* eslint-disable react/prop-types */
import { externalLinkIcon } from "../data/icons";

function ProjectCard({ project }) {
  return (
    <article className="group w-full h-fit cursor-pointer">
      <a
        href={project.liveLink}
        target="_blank"
        className="flex flex-col gap-2"
      >
        <div className="relative w-full rounded-[25px] overflow-hidden">
          <img
            src={project.image}
            alt={project.altText}
            style={{ width: "100%" }}
            className="group-hover:scale-110 duration-short"
          />
        </div>
      </a>

      <div className="flex items-center">
        <a
          href={project.liveLink}
          target="_blank"
          className="py-2 text-light-gray hover:text-accent flex justify-center items-center gap-2 flex-1"
        >
          {externalLinkIcon} Live Demo
        </a>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-base text-dark-gray dark:text-white-90 group-hover:text-accent duration-short">
          {project.name}
        </h4>

        <span className="text-sm text-light-gray">
          {project.simpleDiscribtion}
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;
