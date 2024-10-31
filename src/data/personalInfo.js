export const personalInfo = {
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
            liveLink: 'www.livelink.com',
            githubRepo: 'www.githubRepoLink.com',
            description: 'Developed a fully functional todo app with features like adding, editing, and deleting tasks, categorization, and filtration. Integrated a Pomodoro timer to enhance task management.',
            technologies: ['JavaScript', 'React JS', 'Tailwind CSS', 'localStorage'],
            challengeOvercome: 'Implementing dynamic themes using Tailwind CSS, creating localStorage-based persistence, and managing state across multiple components.',
            addToViewableCv: true,
            addToDownloadableCv: true,
        },
        {
            name: 'Weather App',
            liveLink: '',
            githubRepo: '',
            description: 'Built a weather forecasting app that retrieves real-time weather data based on user input and displays detailed weather forecasts.',
            technologies: ['React JS', 'Tailwind CSS', 'Weather API'],
            challengeOvercome: 'Handling API responses efficiently, creating a clean UI for displaying large amounts of data.',
            addToViewableCv: true,
            addToDownloadableCv: true,
        },
        {
            name: 'Landing Pages',
            liveLink: '',
            githubRepo: '',
            description: 'Designed and developed various landing pages using modern design practices, ensuring responsiveness across devices.',
            technologies: ['HTML', 'CSS', 'SASS'],
            challengeOvercome: 'Improved web performance and user experience through optimized media queries and clean, maintainable code.',
            addToViewableCv: false,
            addToDownloadableCv: true,
        },
        {
            name: 'Note-Taking App',
            liveLink: '',
            githubRepo: '',
            description: 'Developed a note-taking web application where users can create, edit, and delete notes.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            challengeOvercome: 'Simplified UI and organized structure for seamless note management.',
            addToViewableCv: true,
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