import personalInfo from "./personalInfo";

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
    education: 
      {
        universityName: `${personalInfo.education[0].universityName}`,
        degree: `${personalInfo.education[0].degree}`,
        graduationYear: `${personalInfo.education.graduationYear}`,
      },
      // skills: ['React JS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git'],
      skills: personalInfo.technicalSkills.flatMap(skill => {
          const key = Object.keys(skill)[0];
          return skill[key];
      }),
      projects: personalInfo.projects.filter(project => project.addToViewableCv),
    experience: [
      {
        company: 'Tech Company',
        position: 'Frontend Developer',
        startDate: 'Jan 2023',
        endDate: 'Present',
        description: [
          'Developed and maintained user-friendly web applications using, HTML, CSS, JavaScript and React JS.',
          'Collaborated with designers and backend developers to deliver high-quality products.',
          'Implemented responsive designs using Tailwind CSS.',
        ],
      },
    ],
  };
  
  export default cvData;
  