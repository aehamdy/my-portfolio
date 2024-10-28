import { personalInfo } from "./personalInfo";

// Random Data
const cvData = {
    personalDetails: {
      name: `${personalInfo.firstName} ${personalInfo.middleName} ${personalInfo.lastName}`,
      email: `${personalInfo.email}`,
      phone: `${personalInfo.phoneNumber}`,
      address: `${personalInfo.location}`,
      portfolio: `${personalInfo.social.portfolio}`,
      linkedIn: `${personalInfo.social.linkedin}`,
      github: `${personalInfo.social.github}`,
    },
    education: [
      {
        institution: `${personalInfo.education.universityName}`,
        degree: `${personalInfo.education.degree}`,
        graduationYear: `${personalInfo.education.graduationYear}`,
      },
    ],
    experience: [
      {
        company: 'Tech Company',
        position: 'Frontend Developer',
        startDate: 'Jan 2023',
        endDate: 'Present',
        description: [
          'Developed and maintained user-friendly web applications using React JS.',
          'Collaborated with designers and backend developers to deliver high-quality products.',
          'Implemented responsive designs using Tailwind CSS.',
        ],
      },
    ],
    // skills: ['React JS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git'],
    skills: personalInfo.technicalSkills.flatMap(skill => {
        const key = Object.keys(skill)[0];
        return skill[key];
    }),
    projects: personalInfo.projects,
  };
  
  export default cvData;
  