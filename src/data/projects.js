import todomoroApp from "../assets/projects/todomoro.webp";
import weatherApp from "../assets/projects/skycast.webp";
import gymTeam from "../assets/projects/gymteam.webp";
import agencyTemplate from "../assets/projects/Agency_Template.webp";
import noteTakingApp from "../assets/projects/noteapp.webp";
import spentrackerApp from "../assets/projects/spentracker.webp";
import kasperTemplate from "../assets/projects/Kasper_Template.webp";
import leonTemplate from "../assets/projects/Leon_Template.webp";

export const projectCategories = ['all', 'video', 'link', 'image', 'gallery', 'content'];

export const projects = [
    {
        image: todomoroApp,
        altText: "project's image",
        name: 'Todomoro App',
        description: 'gallery',
        technologies: ['React JS', 'Tailwind CSS'],
        link: 'https://todomoro.vercel.app/',
        category: ['gallery',],
    },
    {
        image: weatherApp,
        altText: "project's image",
        name: 'SkyCast - Weather Forecast App',
        description: 'image',
        technologies: ['React JS', 'Tailwind CSS'],
        link: 'https://sky-cast-wine.vercel.app/',
        category: ['image',],
    },
    {
        image: gymTeam,
        altText: "project's image",
        name: 'GYM Landing Page',
        description: 'image',
        technologies: ['React JS', 'Tailwind CSS'],
        link: 'https://gymteam-landingpage.vercel.app/',
        category: ['image',], //React JS & Tailwinc CSS
    },
    {
        image: spentrackerApp,
        altText: "project's image",
        name: 'Expenses Tracker App',
        description: 'video',
        technologies: ['HTML', 'SASS', 'JavaScript'],
        link: 'https://aehamdy.github.io/expenses-tracker/',
        category: ['video', 'link'], //HTML SASS JS
    },
    {
        image: noteTakingApp,
        altText: "project's image",
        name: 'Note Taking App',
        description: 'link',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://aehamdy.github.io/note_taking_app_final_js_project_almdrasa/',
        category: ['link'],
    },
    {
        image: agencyTemplate,
        altText: "project's image",
        name: 'Agency Template',
        description: 'Mobile gallery app',
        technologies: ['HTML', 'CSS'],
        link: 'https://aehamdy.github.io/elzero-html-css-template-three/',
        category: ['gallery', 'image'],
    },
    {
        image: kasperTemplate,
        altText: "project's image",
        name: 'Kasper Template',
        description: 'content',
        technologies: ['HTML', 'CSS'],
        link: 'https://aehamdy.github.io/kasper-html-css-template/',
        category: ['',],
    },
    {
        image: leonTemplate,
        altText: "project's image",
        name: 'Leon Template',
        description: 'content',
        technologies: ['HTML', 'CSS'],
        link: 'https://aehamdy.github.io/leon-html-css-template/',
        category: ['video',],
    },
]