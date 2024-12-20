import { agencyTemplate, gleamyAgency, gymTeam, kasperTemplate, leonTemplate, noteTakingApp, spentrackerApp, todomoroApp, weatherApp } from "./projectImages";

const personalInfo = {
    hiringStatus: true,
    firstName: 'Ahmed',
    middleName: 'Essam',
    lastName: 'Hamdy',
    fullName() {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    phoneNumber: "+20 1010573100",
    email: "ae.hamdy91@gmail.com",
    residence: 'Egypt',
    location: 'Cairo, Egypt',
    languages: ['English', 'Arabic',],
    title: 'Frontend Developer',
    brief: "I'm a frontend developer skilled in React, JavaScript, CSS, and Tailwind CSS, focused on creating dynamic, user-centered web applications. I emphasize clean code, responsive design, and performance optimization for scalable and efficient projects. Collaborative and detail-oriented, I aim to refine my expertise in frontend frameworks and lead impactful development teams.",
    bio: 'A passionate frontend developer with experience in building responsive and accessible web applications using React, Tailwind CSS, and more.',
    social: {portfolio: 'https://ahmedessam-portfolio.vercel.app', linkedin: 'https://www.linkedin.com/in/aehamdy/', github: 'https://github.com/aehamdy'},
    summary: 'Enthusiastic and self-driven Junior Front-End Developer with a passion for building interactive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS, with a strong focus on responsive design and seamless user experiences. Eager to apply creative ideas in real-world projects while continuously learning and growing in the fast-evolving web development landscape.',
    
    technicalSkills: [
        {Languages: ['HTML', 'CSS', 'JavaScript', 'SASS']},
        {'Frameworks & Libraries': ['React JS', 'Tailwind CSS']},
        {'Version Control': ['Git', 'Github']},
        {'Other Tools': ['Agile methodologies','Responsive design','Figma (basic)']}
    ],
    
    projects: [
        {
            name: 'Gleamy Agency',
            cvName: 'Agency Website',
            image: gleamyAgency,
            altText: "project's image",
            simpleDiscribtion: "Multipage Website",
            liveLink: 'https://gleamy-agency.vercel.app',
            githubRepo: 'https://github.com/aehamdy/gleamy-agency',
            description: 'This React JS web application for a digital agency delivers a seamless user experience with dynamic pages for Home, Services, About Us, and Portfolio. Built with react-router-dom for smooth navigation and Tailwind CSS for modern styling, it features active link highlighting via NavLink. A robust error page handles invalid routes with a clear message, Home navigation, and automatic redirection. A reusable PageLayout component ensures consistent structure, dynamically rendering content through Outlet for efficiency and scalability.',
            technologies: ['React JS', 'React-router-dom', 'Tailwind CSS'],
            challengeOvercome: 'I crafted dynamic active link styling, developed a user-friendly error page with redirection, designed a reusable layout for consistency, and delivered a fully responsive interface using Tailwind CSS.',
            category: ['web app'],
            addToPortfolioProjects: true,
            addToDownloadableCv: true,
            addToViewableCv: false,
        },
        {
            name: 'Todomoro App',
            cvName: 'Todo App with Pomodoro Timer',
            image: todomoroApp,
            altText: "project's image",
            simpleDiscribtion: "Todo App + Pomodoro Technique Timer + Normal Timer",
            liveLink: 'https://todomoro.vercel.app',
            githubRepo: 'https://github.com/aehamdy/Todomoro',
            description: 'Developed a fully functional todo app with features like adding, editing, and deleting tasks, categorization, and filtration. Integrated a Pomodoro timer to enhance task management.',
            technologies: ['React JS', 'Tailwind CSS', 'localStorage'],
            challengeOvercome: 'Implementing dynamic themes using Tailwind CSS, creating localStorage-based persistence, and managing state across multiple components.',
            category: ['web app', 'single page app'],
            addToPortfolioProjects: true,
            addToDownloadableCv: true,
            addToViewableCv: false,
        },
        {
            name: 'SkyCast',
            cvName: 'Weather App',
            image: weatherApp,
            altText: "project's image",
            simpleDiscribtion: "Weather Forecast App",
            liveLink: 'https://sky-cast-wine.vercel.app',
            githubRepo: 'https://github.com/aehamdy/SkyCast',
            description: 'Built a weather forecasting app that retrieves real-time weather data based on user input and displays detailed weather forecasts.',
            technologies: ['React JS', 'Tailwind CSS', 'Weather API'],
            challengeOvercome: 'Handling API responses efficiently, creating a clean UI for displaying large amounts of data.',
            category: ['web app', 'api', 'single page app'],
            addToPortfolioProjects: true,
            addToDownloadableCv: true,
            addToViewableCv: false,
        },
        {
            name: 'GymTeam',
            cvName: 'Landing Pages (React JS + Tailwind CSS)',
            image: gymTeam,
            altText: "project's image",
            simpleDiscribtion: "GYM Landing Page",
            liveLink: 'https://gymteam-landingpage.vercel.app',
            githubRepo: 'https://github.com/aehamdy/gymteam_landingpage',
            description: 'Designed and developed various landing pages using React JS and Tailwind CSS, ensuring responsiveness across devices.',
            technologies: ['React JS', 'Tailwind CSS'],
            challengeOvercome: 'Improved web performance and user experience through optimized media queries and clean, maintainable code.',
            category: ['landing page'],
            addToPortfolioProjects: true,
            addToDownloadableCv: true,
            addToViewableCv: false,
        },
        {
            name: 'Noties',
            cvName: 'Note-Taking App',
            image: noteTakingApp,
            altText: "project's image",
            simpleDiscribtion: "Note Taking App",
            liveLink: 'https://aehamdy.github.io/note_taking_app_final_js_project_almdrasa',
            githubRepo: 'https://github.com/aehamdy/note_taking_app_final_js_project_almdrasa',
            description: 'Developed a note-taking web application where users can create, edit, and delete notes.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            challengeOvercome: 'Simplified UI and organized structure for seamless note management.',
            category: ['web app', 'single page app'],
            addToPortfolioProjects: true,
            addToDownloadableCv: true,
            addToViewableCv: false,
        },
        {
            name: 'SpenTracker',
            cvName: 'Spending Tracker App',
            image: spentrackerApp,
            altText: "project's image",
            simpleDiscribtion: "Expenses Tracker App",
            liveLink: 'https://aehamdy.github.io/expenses-tracker',
            githubRepo: 'https://github.com/aehamdy/expenses-tracker',
            description: 'Developed a note-taking web application where users can create, edit, and delete notes.',
            technologies: ['HTML', 'SASS', 'JavaScript'],
            challengeOvercome: 'Simplified UI and organized structure for seamless note management.',
            category: ['web app', 'single page app'],
            addToPortfolioProjects: true,
            addToDownloadableCv: true,
            addToViewableCv: false,
        },
        {
            name: 'Agency Template',
            cvName: 'Landing Pages (HTML + CSS)',
            image: agencyTemplate,
            altText: "project's image",
            simpleDiscribtion: "Agency Landing Page",
            liveLink: 'https://aehamdy.github.io/elzero-html-css-template-three',
            githubRepo: 'https://github.com/aehamdy/elzero-html-css-template-three',
            description: 'Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.',
            technologies: ['HTML', 'CSS',],
            challengeOvercome: 'Improved web performance and user experience through optimized media queries and clean, maintainable code.',
            category: ['landing page'],
            addToPortfolioProjects: true,
            addToDownloadableCv: true,
            addToViewableCv: false,
        },
        {
            name: 'Kasper Template',
            cvName: 'Landing Pages (HTML + CSS)',
            image: kasperTemplate,
            altText: "project's image",
            simpleDiscribtion: "Agency Landing Page",
            liveLink: 'https://aehamdy.github.io/kasper-html-css-template',
            githubRepo: 'https://github.com/aehamdy/kasper-html-css-template',
            description: 'Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.',
            technologies: ['HTML', 'CSS',],
            challengeOvercome: 'Improved web performance and user experience through optimized media queries and clean, maintainable code.',
            category: ['landing page'],
            addToPortfolioProjects: true,
            addToDownloadableCv: false,
            addToViewableCv: false,
        },
        {
            name: 'Leon Template',
            cvName: 'Landing Pages (HTML + CSS)',
            image: leonTemplate,
            altText: "project's image",
            simpleDiscribtion: "Agency Landing Page",
            liveLink: 'https://aehamdy.github.io/kasper-html-css-template',
            githubRepo: 'https://github.com/aehamdy/kasper-html-css-template',
            description: 'Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.',
            technologies: ['HTML', 'CSS',],
            challengeOvercome: 'Improved web performance and user experience through optimized media queries and clean, maintainable code.',
            category: ['landing page'],
            addToPortfolioProjects: true,
            addToDownloadableCv: false,
            addToViewableCv: false,
        },
    ],
    
    education: [
        {
        universityName: 'Thebes Higher Institute of Engineering ',
        location: 'Cairo, Egypt',
        degree: "Bachelor's Degree in Communication & Electronics Engineering",
        graduationYear: '2020',
    },
],
    
certifications: ['Self-taught front-end developer through online resources and tutorials.'],
    
additionalInformation: 'Open to both relocation and remote work opportunities.',
    
keyStrengths: [
        'Strong problem-solving skills and attention to detail.',
        'Ability to work independently on complex tasks and projects.',
        'Enthusiastic about learning new technologies and contributing to team success.',
        'Passion for creating intuitive and accessible user experiences.'
    ],
    
    references: ['Available upon request.'],

}

export default personalInfo;