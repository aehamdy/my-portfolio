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
    social: {portfolio: 'www.personalportfolio.com', linkedin: 'https://www.linkedin.com/in/aehamdy/', github: 'https://github.com/aehamdy'},
    summary: 'Enthusiastic and self-driven Junior Front-End Developer with a passion for building interactive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS, with a strong focus on responsive design and seamless user experiences. Eager to apply creative ideas in real-world projects while continuously learning and growing in the fast-evolving web development landscape.',
    
    technicalSkills: [
        {Languages: ['HTML', 'CSS', 'JavaScript', 'SASS']},
        {'Frameworks & Libraries': ['React JS', 'Tailwind CSS']},
        {'Version Control': ['Git', 'Github']},
        {'Other Tools': ['Agile methodologies','Responsive design','Figma (basic)']}
    ],
    
    projects: [
        {
            name: 'Todo App with Pomodoro Timer',
            liveLink: 'https://todomoro.vercel.app',
            githubRepo: 'https://github.com/aehamdy/Todomoro',
            description: 'Developed a fully functional todo app with features like adding, editing, and deleting tasks, categorization, and filtration. Integrated a Pomodoro timer to enhance task management.',
            technologies: ['JavaScript', 'React JS', 'Tailwind CSS', 'localStorage'],
            challengeOvercome: 'Implementing dynamic themes using Tailwind CSS, creating localStorage-based persistence, and managing state across multiple components.',
            addToViewableCv: false,
            addToDownloadableCv: true,
        },
        {
            name: 'Weather App',
            liveLink: 'https://sky-cast-wine.vercel.app/',
            githubRepo: 'https://github.com/aehamdy/SkyCast',
            description: 'Built a weather forecasting app that retrieves real-time weather data based on user input and displays detailed weather forecasts.',
            technologies: ['React JS', 'Tailwind CSS', 'Weather API'],
            challengeOvercome: 'Handling API responses efficiently, creating a clean UI for displaying large amounts of data.',
            addToViewableCv: false,
            addToDownloadableCv: true,
        },
        {
            name: ' Landing Pages (React JS + Tailwind CSS)',
            liveLink: 'https://gymteam-landingpage.vercel.app/',
            githubRepo: 'https://github.com/aehamdy/gymteam_landingpage',
            description: 'Designed and developed various landing pages using React JS and Tailwind CSS, ensuring responsiveness across devices.',
            technologies: ['React JS', 'Tailwind CSS'],
            challengeOvercome: 'Improved web performance and user experience through optimized media queries and clean, maintainable code.',
            addToViewableCv: false,
            addToDownloadableCv: true,
        },
        {
            name: 'Note-Taking App',
            liveLink: 'https://aehamdy.github.io/note_taking_app_final_js_project_almdrasa/',
            githubRepo: 'https://github.com/aehamdy/note_taking_app_final_js_project_almdrasa',
            description: 'Developed a note-taking web application where users can create, edit, and delete notes.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            challengeOvercome: 'Simplified UI and organized structure for seamless note management.',
            addToViewableCv: false,
            addToDownloadableCv: true,
        },
        {
            name: 'Landing Pages (HTML + SASS)',
            liveLink: 'https://aehamdy.github.io/elzero-html-css-template-three/',
            githubRepo: 'https://github.com/aehamdy/elzero-html-css-template-three',
            description: 'Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.',
            technologies: ['HTML', 'SASS',],
            challengeOvercome: 'Improved web performance and user experience through optimized media queries and clean, maintainable code.',
            addToViewableCv: false,
            addToDownloadableCv: true,
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