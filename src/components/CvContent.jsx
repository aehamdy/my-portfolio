import cvData from "../data/cvData";

function CvContent() {
  return `
    <div>
      <h1>{cvData.personalDetails.name}</h1>
      <p>{cvData.personalDetails.email}</p>
      <p>{cvData.personalDetails.phone}</p>
      <p>{cvData.personalDetails.address}</p>
      <p>
        <a href={cvData.personalDetails.linkedIn}>LinkedIn</a> |{" "}
        <a href={cvData.personalDetails.github}>GitHub</a>
      </p>

      <h2>Education</h2>
      {cvData.education.map((edu, index) => (
        <p key={index}>
          {edu.institution}: {edu.degree} ({edu.startDate} - {edu.endDate})
        </p>
      ))}

      <h2>Experience</h2>
      {cvData.experience.map((job, index) => (
        <div key={index}>
          <p>
            {job.position} at {job.company} ({job.startDate} - {job.endDate})
          </p>
          <ul>
            {job.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Skills</h2>
      <ul>
        {cvData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>`;
}

export default CvContent;
