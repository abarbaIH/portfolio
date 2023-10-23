import crazyFrog from "../../assets/crazyFrogGame.jpg"
import musicEvents from "../../assets/musicEventsApp.jpg"
import musicTeams from "../../assets/musicTeamsApp.jpg"
import packSnak from "../../assets/packSnackSL.jpg"
import todo from "../../assets/to-do.jpg"
import petAppointment from '../../assets/Pet Appointment.jpg'
import imagesSearch from '../../assets/imagesSearch.jpg'
import weatherSearch from '../../assets/weatherSearch.jpg'
import cryptoSearch from '../../assets/cryptoSearch.jpg'
import recipesSearch from '../../assets/recipesSearch.jpg'
import loanEstimator from '../../assets/loanEstimator.jpg'
import cyLWildfireTracker from '../../assets/cyLWildfireTracker.jpg'
import ufChileApp from '../../assets/ufChileApp.jpg'



export const projectsData = [
    {
        id: 1,
        image: musicTeams,
        title: "Music Teams App",
        category: "fullstack",
        projectLink: "https://musicteamsapp.netlify.app/",
        description: "Proyecto módulo 3 Ironhack. Aplicación web full MERN que consiste en una red social que pone en contactos músicos con salas de ensayo para poder quedar para tocar con otros músicos.",
        tools: [
            "React",
            "Javascript",
            "CSS",
            "HTML5",
            "Express",
            "Mongoose",
            "MongoDb",
            "Node.js"
        ]
    },
    {
        id: 2,
        image: musicEvents,
        title: "Music Events App",
        category: "backend",
        projectLink: "https://music-events.fly.dev/",
        description: "Proyecto módulo 2 Ironhack. Aplicación web para asistir a eventos musicales de todo tipo, así como gestionar tus artistas favoritos usando la API de Spotify.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5",
            "Express",
            "Mongoose",
            "MongoDb",
            "Node.js"
        ]
    },
    {
        id: 3,
        image: crazyFrog,
        title: "The Crazy Frog Game",
        category: "frontend",
        projectLink: "https://crazy-frog-game.netlify.app/",
        description: "Proyecto módulo 1 Ironhack. Videojuego de plataformas para navegadores web.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5",
            "Canvas"
        ]
    },
    {
        id: 4,
        image: packSnak,
        title: "Pack Snack DSS",
        category: "data",
        projectLink: "https://www.inesem.es/articulos-investigacion/sistema-soporte-lineas-produccion",
        description: "Proyecto final Master Big Data. Aplicación para medir tiempos de producción de una planta de envasado y tratar los datos obtenidos para la ayuda en la toma de decisiones.",
        tools: [
            "Python",
            "Sql",
            "R"
        ]
    },

    {
        id: 5,
        image: todo,
        title: "TO-DO",
        category: "frontend",
        projectLink: "https://abarba-react-todo.netlify.app/",
        description: "Proyecto Frontend Mentor. Aplicación web para registrar y organizar tareas pendientes del día a día.",
        tools: [
            "React",
            "Javascript",
            "CSS",
            "HTML5",
            "Tailwind"
        ]

    },

    {
        id: 6,
        image: petAppointment,
        title: "Pet Appointment",
        category: "frontend",
        projectLink: "https://citas-veterinarias-admin.netlify.app/",
        description: "Proyecto Curso JS Moderno. Aplicación web para administrar citas pediátricas.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },

    {
        id: 7,
        image: imagesSearch,
        title: "Images Search",
        category: "frontend",
        projectLink: "https://images-search-abarba.netlify.app/",
        description: "Proyecto Curso JS Moderno. Aplicación web para buscar imágenes usando la API de Pixabay.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },

    {
        id: 8,
        image: recipesSearch,
        title: "Recipe Search",
        category: "frontend",
        projectLink: "https://recipe-search-abarba.netlify.app/",
        description: "Proyecto Curso JS Moderno. Aplicación web para buscar recetas usando la API The Meal DB.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },

    {
        id: 9,
        image: cryptoSearch,
        title: "Crypto Search",
        category: "frontend",
        projectLink: "https://crypto-search-abarba.netlify.app/",
        description: "Proyecto Curso JS Moderno. Aplicación web para cotizar en tiempo real criptomonedas usando la API Cryptoccompare.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },

    {
        id: 10,
        image: weatherSearch,
        title: "Weather Search",
        category: "frontend",
        projectLink: "https://weather-search-abarba.netlify.app/",
        description: "Proyecto Curso JS Moderno. Aplicación web para chequear temperaturas de diferentes ciudades usando la API Openweathermap.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },
    {
        id: 11,
        image: loanEstimator,
        title: "Loan Estimator",
        category: "frontend",
        projectLink: "https://loan-estimator-abarba.netlify.app/",
        description: "Proyecto Curso JS Moderno. Aplicación web para calcular préstamos en función de la cantidad y el plazo.",
        tools: [
            "Vue",
            "Javascript",
            "TailwindCSS",
            "HTML5"
        ]
    },
    {
        id: 12,
        image: cyLWildfireTracker,
        title: "Loan CyL Wildfire Tracker",
        category: "frontend",
        projectLink: "https://abarba-wildfire-tracker.netlify.app/",
        description: "SPA que ofrece información acerca de incendios forestales situados en la Comunidad de Castilla y León usando la API Datos Abiertos JCYL.",
        tools: [
            "React",
            "Javascript",
            "TailwindCSS",
            "HTML5"
        ]
    },
    {
        id: 13,
        image: ufChileApp,
        title: "UF Chile App",
        category: "frontend",
        projectLink: "https://ufchileapp.netlify.app/",
        description: "SPA que ofrece información acerca del indicador de Unidad de Fomento en el país de Chile.",
        tools: [
            "React",
            "Javascript",
            "TailwindCSS",
            "HTML5"
        ]
    }

];

export const projectsNav = [
    {
        name: "all"
    },

    {
        name: "frontend"
    },
    {
        name: "backend"
    },
    {
        name: "fullstack"
    },
    {
        name: "data"
    },
]
