/* eslint-disable react/prop-types */
const CvModal = ({ isOpen, closeModal, cvData }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center z-50 text-black bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl mx-1 sm:mx-auto overflow-auto max-h-[95vh]">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-32 py-1 px-2 text-black hover:text-red-500 border-2 border-black rounded-full"
        >
          X
        </button>

        {/* CV Content */}
        <div className="">
          <h1 className="text-3xl font-bold">{cvData.personalDetails.name}</h1>
          <hr />
          <p>{cvData.personalDetails.email}</p>
          <p>{cvData.personalDetails.phone}</p>
          <p>{cvData.personalDetails.address}</p>
          <p>
            <a
              href={cvData.personalDetails.portfolio}
              className="text-blue-500"
            >
              Portfolio
            </a>
          </p>
          <p>
            <a href={cvData.personalDetails.linkedIn} className="text-blue-500">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href={cvData.personalDetails.github} className="text-blue-500">
              GitHub
            </a>
          </p>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Education</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3>{edu.institution}</h3>
                <p>
                  {edu.degree} ({edu.startDate} - {edu.endDate})
                </p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Experience</h2>
            {cvData.experience.map((job, index) => (
              <div key={index} className="mb-4">
                <h3>
                  {job.position} at {job.company}
                </h3>
                <p>
                  {job.startDate} - {job.endDate}
                </p>
                <ul className="pl-5">
                  {job.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="flex gap-2">
              {cvData.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <ul className="flex flex-col gap-2">
              {cvData.projects.map((project, i) => (
                <li key={i}>
                  <h3>{project.name}</h3>
                  <p>
                    Live Link:
                    <a href={project.liveLink} className="text-blue-500">
                      Live Link
                    </a>
                  </p>
                  <p>
                    Github Repository:
                    <a href={project.githubRep} className="text-blue-500">
                      Repo Link
                    </a>
                  </p>
                  <ul>
                    Technologies used:{" "}
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech} </li>
                    ))}
                  </ul>
                  <p>Challenge overcome: {project.challengeOvercome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
