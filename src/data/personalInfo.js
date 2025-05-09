import {
  agencyTemplate,
  gleamyAgency,
  gymTeam,
  kasperTemplate,
  leonTemplate,
  noteTakingApp,
  spentrackerApp,
  todomoroApp,
  weatherApp,
  glozin,
} from "./projectImages";
import { categories } from "./categories";

const personalInfo = {
  hiringStatus: true,
  firstName: "Ahmed",
  middleName: "Essam",
  lastName: "Hamdy",
  fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  phoneNumber: "+20 1010573100",
  email: "ae.devverse@gmail.com",
  residence: "Egypt",
  location: "Cairo, Egypt",
  languages: ["Arabic", "English"],
  title: "Frontend Developer",
  brief:
    "I'm a frontend developer skilled in React, JavaScript, CSS, and Tailwind CSS, focused on creating dynamic, user-centered web applications. I emphasize clean code, responsive design, and performance optimization for scalable and efficient projects. Collaborative and detail-oriented, I aim to refine my expertise in frontend frameworks and lead impactful development teams.",
  bio: "A passionate frontend developer with experience in building responsive and accessible web applications using React, Tailwind CSS, and more.",
  links: {
    portfolio: "https://ahmedessam-portfolio.vercel.app",
    linkedin: "https://www.linkedin.com/in/aehamdy/",
    github: "https://github.com/aehamdy",
  },
  summary:
    "Enthusiastic and self-driven Junior Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. Passionate about creating responsive, user-friendly web applications with a focus on seamless user experiences. Committed to continuous learning and growth in the ever-evolving field of web development.",

  technicalSkills: [
    { Languages: ["HTML", "CSS", "JavaScript (ES6+)"] },
    {
      "Frameworks & Libraries": [
        "React JS",
        "Tailwind CSS",
        "SASS",
        "Framer-Motion",
      ],
    },
    { "Version Control": ["Git", "Github"] },
    {
      "Other Tools": [
        "Agile methodologies",
        "Responsive design",
        "Figma (basic)",
      ],
    },
  ],

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

  projects: [
    {
      name: "Glozin",
      cvName: "E-commerce Store",
      image: glozin,
      altText: "project's image",
      simpleDiscribtion: "E-commerce Website",
      liveLink: "https://glozin-store.vercel.app/",
      githubRepo: "https://github.com/aehamdy/glozin",
      description: `Built a responsive e-commerce platform using React, Tailwind CSS, and Framer Motion. It features a dynamic shopping cart, live search, discount system, wishlist, and product reviews. Smooth animations enhance the UI, providing a seamless and engaging shopping experience.`,
      technologies: [
        "React JS",
        "Context-API",
        "React-router",
        "Tailwind CSS",
        "Framer-Motion",
      ],
      challengeOvercome: `
Optimized cart state with Context API and useReducer, refined routing with React Router, and improved live search with debouncing. Replaced a custom modal for better accessibility and enhanced performance through debugging.`,
      category: [categories.webApp, categories.api],
      addToPortfolioProjects: true,
      addToDownloadableCv: true,
      addToViewableCv: false,
    },
    {
      name: "Todomoro App",
      cvName: "Todo App with Pomodoro Timer",
      image: todomoroApp,
      altText: "project's image",
      simpleDiscribtion: "Todo App + Pomodoro Technique Timer + Normal Timer",
      liveLink: "https://todomoro.vercel.app",
      githubRepo: "https://github.com/aehamdy/Todomoro",
      description:
        "Developed a fully functional todo app with features like adding, editing, and deleting tasks, categorization, and filtration. Integrated a Pomodoro timer to enhance task management.",
      technologies: ["React JS", "Tailwind CSS", "localStorage"],
      challengeOvercome:
        "Implementing dynamic themes using Tailwind CSS, creating localStorage-based persistence, and managing state across multiple components.",
      category: [categories.webApp],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "Gleamy Agency",
      cvName: "Agency Website",
      image: gleamyAgency,
      altText: "project's image",
      simpleDiscribtion: "Multipage Website",
      liveLink: "https://gleamy-agency.vercel.app",
      githubRepo: "https://github.com/aehamdy/gleamy-agency",
      description:
        "Built a React-based agency website with smooth navigation, dynamic pages, and modern styling using Tailwind CSS. Implemented active link highlighting, a reusable layout, and an intuitive error page with redirection.",
      // description:
      //   "This React JS web application for a digital agency delivers a seamless user experience with dynamic pages for Home, Services, About Us, and Portfolio. Built with react-router-dom for smooth navigation and Tailwind CSS for modern styling, it features active link highlighting via NavLink. A robust error page handles invalid routes with a clear message, Home navigation, and automatic redirection. A reusable PageLayout component ensures consistent structure, dynamically rendering content through Outlet for efficiency and scalability.",
      technologies: ["React JS", "React-router-dom", "Tailwind CSS"],
      challengeOvercome:
        "Refined active link styling, improved error handling, and ensured full responsiveness with Tailwind CSS.",
      // challengeOvercome:
      //   "I crafted dynamic active link styling, developed a user-friendly error page with redirection, designed a reusable layout for consistency, and delivered a fully responsive interface using Tailwind CSS.",
      category: [categories.landingPage],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "SkyCast",
      cvName: "Weather App",
      image: weatherApp,
      altText: "project's image",
      simpleDiscribtion: "Weather Forecast App",
      liveLink: "https://sky-cast-wine.vercel.app",
      githubRepo: "https://github.com/aehamdy/SkyCast",
      description:
        "Built a weather forecasting app that retrieves real-time weather data based on user input and displays detailed weather forecasts.",
      technologies: ["React JS", "Tailwind CSS", "Weather API"],
      challengeOvercome:
        "Handling API responses efficiently, creating a clean UI for displaying large amounts of data.",
      category: [categories.webApp, categories.api],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "GymTeam",
      cvName: "Landing Page",
      image: gymTeam,
      altText: "project's image",
      simpleDiscribtion: "GYM Landing Page",
      liveLink: "https://gymteam-landingpage.vercel.app",
      githubRepo: "https://github.com/aehamdy/gymteam_landingpage",
      description:
        "Designed and developed various landing pages using React JS and Tailwind CSS, ensuring responsiveness across devices.",
      technologies: ["React JS", "Tailwind CSS"],
      challengeOvercome:
        "Improved web performance and user experience through optimized media queries and clean, maintainable code.",
      category: [categories.landingPage],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "Noties",
      cvName: "Note-Taking App",
      image: noteTakingApp,
      altText: "project's image",
      simpleDiscribtion: "Note Taking App",
      liveLink:
        "https://aehamdy.github.io/note_taking_app_final_js_project_almdrasa",
      githubRepo:
        "https://github.com/aehamdy/note_taking_app_final_js_project_almdrasa",
      description:
        "Developed a note-taking web application where users can create, edit, and delete notes.",
      technologies: ["JavaScript", "HTML", "CSS"],
      challengeOvercome:
        "Simplified UI and organized structure for seamless note management.",
      category: [categories.webApp],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "SpenTracker",
      cvName: "Spending Tracker App",
      image: spentrackerApp,
      altText: "project's image",
      simpleDiscribtion: "Expenses Tracker App",
      liveLink: "https://aehamdy.github.io/expenses-tracker",
      githubRepo: "https://github.com/aehamdy/expenses-tracker",
      description:
        "Developed a note-taking web application where users can create, edit, and delete notes.",
      technologies: ["HTML", "SASS", "JavaScript"],
      challengeOvercome:
        "Simplified UI and organized structure for seamless note management.",
      category: [categories.webApp],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "Agency Template",
      cvName: "Landing Pages (HTML + CSS)",
      image: agencyTemplate,
      altText: "project's image",
      simpleDiscribtion: "Agency Landing Page",
      liveLink: "https://aehamdy.github.io/elzero-html-css-template-three",
      githubRepo: "https://github.com/aehamdy/elzero-html-css-template-three",
      description:
        "Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.",
      technologies: ["HTML", "CSS"],
      challengeOvercome:
        "Improved web performance and user experience through optimized media queries and clean, maintainable code.",
      category: [categories.landingPage],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "Kasper Template",
      cvName: "Landing Pages (HTML + CSS)",
      image: kasperTemplate,
      altText: "project's image",
      simpleDiscribtion: "Agency Landing Page",
      liveLink: "https://aehamdy.github.io/kasper-html-css-template",
      githubRepo: "https://github.com/aehamdy/kasper-html-css-template",
      description:
        "Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.",
      technologies: ["HTML", "CSS"],
      challengeOvercome:
        "Improved web performance and user experience through optimized media queries and clean, maintainable code.",
      category: [categories.landingPage],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
    {
      name: "Leon Template",
      cvName: "Landing Pages (HTML + CSS)",
      image: leonTemplate,
      altText: "project's image",
      simpleDiscribtion: "Agency Landing Page",
      liveLink: "https://aehamdy.github.io/kasper-html-css-template",
      githubRepo: "https://github.com/aehamdy/kasper-html-css-template",
      description:
        "Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.",
      technologies: ["HTML", "CSS"],
      challengeOvercome:
        "Improved web performance and user experience through optimized media queries and clean, maintainable code.",
      category: [categories.landingPage],
      addToPortfolioProjects: true,
      addToDownloadableCv: false,
      addToViewableCv: false,
    },
  ],

  education: [
    {
      universityName: "Thebes Higher Institute of Engineering ",
      location: "Cairo, Egypt",
      degree: "Bachelor's Degree in Communication & Electronics Engineering",
      graduationYear: "2020",
    },
  ],

  certifications: [
    "Self-taught front-end developer through online resources and tutorials.",
  ],

  additionalInformation:
    "Open to both relocation and remote work opportunities.",

  keyStrengths: [
    "Strong problem-solving skills and attention to detail.",
    "Ability to work independently on complex tasks and projects.",
    "Enthusiastic about learning new technologies and contributing to team success.",
    "Passion for creating intuitive and accessible user experiences.",
  ],

  references: ["Available upon request."],
};

export default personalInfo;
