import { movichImages } from './MovichImages';
import { rsLangImages } from './RSLangImages';
import { snakeImages } from './SnakeImages';
import { toDoImages } from './ToDoImages';
import { travelAppImages } from './TravelAppImages';

export const projects = [
    {
        name: 'RS-Lang',
        description: 'Second command and last project within RS-school React-course.',
        git: 'https://github.com/borodichAlex/rslang/tree/develop',
        deploy: 'https://rslang-team-33-borodichalex.netlify.app/',
        done: new Date('2021, 05, 03'),
        images: rsLangImages,
    },
    {
        name: 'TravelApp',
        description: 'Command project within RS-school React-course. In this app i make header, all header component and PhotoGallery on Country page, frontend side of places rating system. Sent most of the commits from the account PavelClone. Full-adaptive app',
        git: 'https://github.com/borodichAlex/travel-app',
        deploy: 'https://borodichalex-travel-app.netlify.app/',
        done: new Date('2021, 04, 20'),
        images: travelAppImages,
    },
    {
        name: 'Snake',
        description: 'My first project within RS-school React-course. There were several game options to choose from for development. I chose the snake. The playing field is implemented using the Canvas-API. The game has the ability to enable and disable sounds, music, change field settings. Also, there is a high score table, which is stored in localStorage. The design is based on the Ness.css library. Not adapted for mobile devices',
        git: 'https://github.com/PavelMGs/react-game',
        deploy: 'https://pavelmgs-react-game.vercel.app/',
        done: new Date('2021, 03, 20'),
        images: snakeImages,
    },
    {
        name: 'Movich',
        description: 'Simple app for practice basic usage of Rest-API. Based on <a href="https://developers.themoviedb.org/">MovieDB</a>. Adaptive app',
        git: 'https://github.com/PavelMGs/Movich_Dude',
        deploy: 'https://movich-mg.vercel.app/',
        done: new Date('2021, 02, 14'),
        images: movichImages,
    },
    {
        name: 'ToDo',
        description: 'My first React-app, that i created without mentors or rewriting code from screen. A simple to-do list with authorization and data storage, implemented with the Firebase API. Non adaptive',
        git: 'https://github.com/PavelMGs/ToDo',
        deploy: 'https://to-do-gray.vercel.app/',
        done: new Date("2021-01-30"),
        images: toDoImages,
    }
]