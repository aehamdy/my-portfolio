import todomoroApp from "../assets/projects/todomoro.webp";
import weatherApp from "../assets/projects/skycast.webp";
import gymTeam from "../assets/projects/gymteam.webp";
import project1 from "../assets/projects/project1.jpg";
import noteTakingApp from "../assets/projects/noteapp.webp";
import spentrackerApp from "../assets/projects/spentracker.webp";
import project5 from "../assets/projects/project5.jpg";
import project7 from "../assets/projects/project7.jpg";

export const projectCategories = ['all', 'video', 'link', 'image', 'gallery', 'content'];

export const projects = [
    {
        image: todomoroApp,
        altText: "project's image",
        name: 'Todomoro App',
        description: 'gallery', //add simple description
        link: '',
        category: ['gallery',],
    },
    {
        image: weatherApp,
        altText: "project's image",
        name: 'Weather Forecast App',
        description: 'image', //add simple description
        link: '',
        category: ['image',],
    },
    {
        image: gymTeam,
        altText: "project's image",
        name: 'GYM Landing Page',
        description: 'image', //add simple description
        link: '',
        category: ['image',], //React JS & Tailwinc CSS
    },
    {
        image: spentrackerApp,
        altText: "project's image",
        name: 'SpenTracker App',
        description: 'video', //add simple description
        link: '',
        category: ['video', 'link'], //HTML SASS JS
    },
    {
        image: noteTakingApp,
        altText: "project's image",
        name: 'Note Taking App',
        description: 'link', //add simple description
        link: '',
        category: ['link'],
    },
    {
        image: project1,
        altText: "project's image",
        name: 'Weather Mobile App',
        description: 'Mobile gallery app', //add simple description
        link: '',
        category: ['gallery', 'image'],
    },
    {
        image: project5,
        altText: "project's image",
        name: 'SOUNDS Web App',
        description: 'content', //add simple description
        link: '',
        category: ['',],
    },
    {
        image: project7,
        altText: "project's image",
        name: 'Furniture Mobile App',
        description: 'content', //add simple description
        link: '',
        category: ['video',],
    },
]