/* eslint-disable react/prop-types */
import { externalLinkIcon, githubIcon } from "../data/icons";

function ProjectCard({ project }) {
  return (
    <article className="group relative w-full h-fit cursor-pointer">
      <div className="relative w-full rounded-[25px] overflow-hidden">
        {project.isInProgress && (
          <div className="absolute w-full h-full start-0 top-0 flex flex-col justify-center items-center font-semibold text-lg text-accent bg-black/50 backdrop-blur-sm z-10">
            {project.isInProgress && !project.isShippingSoon && (
              <p className="">Building the Next Feature…</p>
            )}

            {project.isShippingSoon && <p className="">Shipping Soon 🚀</p>}
          </div>
        )}

        <a
          href={project.liveLink}
          target="_blank"
          className="flex flex-col gap-2"
        >
          <img
            src={project.image}
            alt={project.altText}
            style={{ width: "100%" }}
            className="group-hover:scale-110 duration-short"
          />
        </a>
      </div>

      <div className="flex items-center">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            className="py-2 text-light-gray hover:text-accent flex justify-center items-center gap-2 flex-1"
          >
            {externalLinkIcon} Live Demo
          </a>
        )}

        <a
          href={project.githubRepo}
          target="_blank"
          className="py-2 text-light-gray hover:text-accent flex justify-center items-center gap-2 flex-1"
        >
          {githubIcon} GitHub Repo
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
