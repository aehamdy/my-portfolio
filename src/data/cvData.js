import personalInfo from "./personalInfo";

// Random Data
const cvData = {
  personalDetails: {
    name: `${personalInfo.firstName} ${personalInfo.middleName} ${personalInfo.lastName}`,
    email: `${personalInfo.email}`,
    phone: `${personalInfo.phoneNumber}`,
    address: `${personalInfo.location}`,
    portfolio: `${personalInfo.links.portfolio}`,
    linkedIn: `${personalInfo.links.linkedin}`,
    github: `${personalInfo.links.github}`,
  },

  education: {
    universityName: `${personalInfo.education[0].universityName}`,
    degree: `${personalInfo.education[0].degree}`,
    graduationYear: `${personalInfo.education.graduationYear}`,
  },

  // skills: ['React JS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git'],
  skills: personalInfo.technicalSkills.flatMap((skill) => {
    const key = Object.keys(skill)[0];
    return skill[key];
  }),

  projects: personalInfo.projects.filter((project) => project.addToViewableCv),

  experience: [
    {
      company: "Tech-Cell",
      position: "Frontend Developer Intern",
      startDate: "April 2025",
      endDate: "May 2025",
      description: [
        "Participated in a 4-week collaborative internship focused on building real-world web applications using React.js.",
        "Week 1: Developed key UI components for a car rental web app alongside a small team (1 frontend & 1 backend developer).",
        "Week 2: Contributed to the frontend of an e-commerce platform within a 6-person team of frontend and backend developers.",
        "Weeks 3–4: Helped build a course platform (similar to Udemy) in a large-scale team (8 frontend, 4 backend). Implemented authentication and role-based routing.",
        "Used Git, GitHub, and Agile-like coordination practices. While backend implementations were incomplete, the frontend features were largely finished and functional.",
      ],
    },
    // Add more experience entries here in the future
  ],

  languages: personalInfo.languages.map((lang) => ({
    name: lang,
    description:
      lang === "Arabic"
        ? "Native"
        : lang === "English"
        ? "Intermediate (spoken and written)"
        : "Proficiency not specified", // Default description for other languages
  })),
};

export default cvData;
