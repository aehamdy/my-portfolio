import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.jpg";
import project8 from "../assets/projects/project8.jpg";

export const projectCategories = ['all', 'video', 'link', 'image', 'gallery', 'content'];

export const projects = [
    {
        image: project1,
        altText: "project's image",
        name: 'Weather Mobile App',
        description: 'Mobile gallery app', //add simple description
        link: '',
        category: ['gallery', 'image'],
    },
    {
        image: project2,
        altText: "project's image",
        name: 'OYYI Furniture App',
        description: 'link', //add simple description
        link: '',
        category: ['link', 'video'],
    },
    {
        image: project3,
        altText: "project's image",
        name: 'Unicode Web App',
        description: 'video', //add simple description
        link: '',
        category: ['video', 'link'],
    },
    {
        image: project4,
        altText: "project's image",
        name: 'Sushi Parlour App',
        description: 'gallery', //add simple description
        link: '',
        category: ['gallery',],
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
        image: project6,
        altText: "project's image",
        name: 'Future Web App',
        description: 'image', //add simple description
        link: '',
        category: ['image',],
    },
    {
        image: project7,
        altText: "project's image",
        name: 'Furniture Mobile App',
        description: 'content', //add simple description
        link: '',
        category: ['',],
    },
    {
        image: project8,
        altText: "project's image",
        name: 'Chat App Mobile',
        description: 'image', //add simple description
        link: '',
        category: ['image',],
    },
]