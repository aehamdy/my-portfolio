/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import cvData from "../data/cvData";

const nameFontSize = "text-3xl font-semibold";
const nameColor = "text-black dark:text-white-90";
const linkColor = "text-blue-500 dark:text-accent";
const headingColor = "black dark:text-light-gray-dd";
const sectionHeadingFontSize = "text-3xl  font-semibold";
const projectNameColor = "text-gray-666 dark:text-soft-white";
const textColor = "text-dark-gray dark:text-gray-666";

const CvModal = ({ isOpen, closeModal }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && event.target === overlayRef.current) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="cv-overlay font-poppins fixed inset-0 flex items-center justify-center z-50 text-black bg-black bg-opacity-70"
    >
      <div className="vertical-scrollbar overflow-y-auto relative max-h-[95vh] mx-1 sm:mx-auto py-5 px-3 md:px-5 lg:p-6 bg-[#fefaf1] dark:bg-body-dark rounded-lg w-full max-w-4xl overflow-auto select-none">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-0 end-0 flex justify-center items-center w-6 h-6 lg:w-8 lg:h-8 p-4 text-black bg-transparent dark:bg-section-dark dark:text-accent border-s-2 border-b-2 dark:border-s-section-dark dark:border-b-section-dark"
        >
          X
        </button>

        {/* CV Content */}
        <div className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <h1 className={`py-2 ${nameFontSize} ${nameColor}`}>
              {cvData.personalDetails.name}
            </h1>
            <hr />
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <p>
              <a
                href={`mailto:${cvData.personalDetails.email}`}
                className={`${linkColor}`}
              >
                Send Email
              </a>
            </p>
            <div className="flex justify-evenly gap-1">
              <div className="flex gap-2 mx-auto">
                <p>
                  <a
                    href={cvData.personalDetails.linkedIn}
                    target="_blank"
                    className={`${linkColor}`}
                  >
                    LinkedIn
                  </a>
                </p>
                <span className="dark:text-white-90">|</span>
                <p>
                  <a
                    href={cvData.personalDetails.github}
                    target="_blank"
                    className={`${linkColor}`}
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className={`${sectionHeadingFontSize} ${headingColor}`}>
              Education
            </h2>
            <div>
              <h3 className={`${textColor} font-semibold`}>
                {cvData.education.universityName}
              </h3>
              <p className={`${textColor}`}>{cvData.education.degree}</p>
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col">
            <h2 className={`${sectionHeadingFontSize} ${headingColor}`}>
              Projects
            </h2>
            <div className="felx flex-col">
              {cvData.projects.map((project, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-4/5 mx-auto py-2 border-b border-b-slate-200"
                >
                  <ul className="flex flex-col items-center">
                    <h3 className={`${projectNameColor} font-semibold`}>
                      {project.name}
                    </h3>
                    <li>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className={`${linkColor}`}
                      >
                        Live Link
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-col items-center">
                    <p className={`${textColor}`}>Technologies used:</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <li key={i} className={`${textColor} text-sm`}>
                          {tech}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col items-center">
            <h2 className={`${sectionHeadingFontSize} ${headingColor}`}>
              Skills
            </h2>
            <ul className={`flex flex-wrap gap-4 w-3/4 ${textColor}`}>
              {cvData.skills.map((skill, i) => (
                <li key={i} className="relative">
                  <span className="absolute w-1.5 h-1.5 top-[50%] -start-2.5 translate-y-[-50%] bg-black dark:bg-white-90 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-2">
            <h2 className={`${sectionHeadingFontSize} ${headingColor}`}>
              Experience
            </h2>
            {cvData.experience.map((job, index) => (
              <div key={index} className="mb-4">
                <ul className="pl-5">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className={`${textColor}`}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
