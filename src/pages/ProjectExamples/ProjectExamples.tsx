import React from 'react';
import Project from '../../Components/Project/Project';
import s from './ProjectExamples.module.scss';

const projects = [
    {
        name: 'RS-Lang',
        description: '',
        git: 'https://github.com/borodichAlex/rslang/tree/develop',
        deploy: 'https://rslang-team-33-borodichalex.netlify.app/',
    },
    {
        name: 'Travel-app',
        description: '',
        git: 'https://github.com/borodichAlex/travel-app',
        deploy: 'https://borodichalex-travel-app.netlify.app/',
    },
    {
        name: 'Snake',
        description: '',
        git: 'https://github.com/PavelMGs/react-game',
        deploy: 'https://pavelmgs-react-game.vercel.app/',
    },
    {
        name: 'Movich',
        description: '',
        git: 'https://github.com/PavelMGs/Movich_Dude',
        deploy: 'https://movich-mg.vercel.app/',
    },
    {
        name: 'ToDo',
        description: 'My first React-app, that i created without mentors or rewriting code from screen. A simple to-do list with authorization and data storage, implemented with the Firebase API.',
        git: 'https://github.com/PavelMGs/ToDo',
        deploy: 'https://to-do-gray.vercel.app/',
    }
]

const ProjectExamples = () => {
    return (
        <div className={s.root}>
            {
                projects.map((item) => <Project data={item}/>)
            }
        </div>
    )
}

export default ProjectExamples;
